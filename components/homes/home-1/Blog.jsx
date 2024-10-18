"use client";

import { useState } from "react";
import { blogs1 } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import VideoModal from "@/components/VideoModal"; // Import the custom VideoModal component

export default function Blog() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openModal = (url) => {
    // Extract video ID from the YouTube URL
    const videoId = url.split("v=")[1]; // This extracts the part after 'v='
    const embedUrl = `https://www.youtube.com/embed/${videoId}`; // Construct the embed URL
    setVideoUrl(embedUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
  };

  return (
    <div className="row mt-n50">
      {blogs1.map((elm, i) => (
        <div
          key={i}
          className="post-prev col-md-6 col-lg-4 mt-50 wow fadeInLeft"
          data-wow-delay={elm.delay}
        >
          <div className="post-prev-container">
            <div className="post-prev-img">
              <button
                onClick={() => openModal(elm.id)} // Pass the full YouTube URL to openModal
                className="video-btn"
                style={{ border: "none", background: "none", padding: 0 }}
              >
                <Image
                  width={650}
                  height={412}
                  src={elm.imgSrc}
                  alt="Add Image Description"
                />
              </button>
            </div>
            <h4 className="post-prev-title">
              <Link href="#">{elm.title}</Link>
            </h4>
          </div>
        </div>
      ))}

      {/* Modal to show YouTube video */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal}>
        <div className="video-container">
          <iframe
            width="100%"
            height="400"
            src={videoUrl} // The URL for the iframe is the constructed YouTube embed URL
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        </div>
      </VideoModal>
    </div>
  );
}
