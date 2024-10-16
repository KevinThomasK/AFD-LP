"use client";
import React, { useState, useEffect } from "react";
import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
//import Benefits from "@/components/homes/home-1/Benefits";
import Blog from "@/components/homes/home-1/Blog";
//import Brands from "@/components/homes/home-1/Brands";
import Contact from "@/components/homes/home-1/Contact";

import Facts from "@/components/homes/home-1/Facts";
import Faq from "@/components/homes/home-1/Faq";
import Features from "@/components/homes/home-1/Features";
//import NewsLetter from "@/components/homes/home-1/NewsLetter";
//import Portfolio from "@/components/homes/home-1/Portfolio";
import Promo from "@/components/homes/home-1/Promo";
import Service from "@/components/homes/home-1/Service";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import CustomExamSection from "@/components/homes/home-1/CustomExamSection";
import CustomSection from "@/components/homes/home-1/CustomSection";
import Link from "next/link";
import Testimonials2 from "./Teatimonials2";
//import Brands2 from "./Brands2";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ModalTrigger } from "@/components/Modal";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export default function Home1({ onePage = false, dark = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialTimeout, setInitialTimeout] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (initialTimeout) {
      const initialTimer = setTimeout(() => {
        setIsModalOpen(true); // Open the modal after 5 seconds
        setInitialTimeout(false); // Set flag to false after the first open
      }, 5000); // 5 seconds

      return () => clearTimeout(initialTimer); // Cleanup
    } else {
      const interval = setInterval(() => {
        setIsModalOpen(true); // Open the modal every 30 seconds
      }, 30000); // 30 seconds

      return () => clearInterval(interval); // Cleanup
    }
  }, [initialTimeout]);

  return (
    <>
      <ModalTrigger isOpen={isModalOpen} onClose={closeModal} />
      <ParallaxContainer
        className="page-section bg-dark-1 bg-dark-alpha-90 parallax-5 light-content"
        style={{
          backgroundImage: "url(/assets/images/afd/mainbanner.jpg)",
        }}
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-4 mb-md-60 mb-xs-50">
              <h2 className="section-title mb-20 wow fadeInUp">
                India&apos;s Oldest NIFT | NID Entrance Exam
              </h2>

              {/* <p
                className="section-descr mb-40 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                We provide the effective ideas that grow businesses of our
                clients.
              </p> */}
              <div className="local-scroll wow fadeInUp" data-wow-delay="0.2s">
                {onePage ? (
                  <button
                    onClick={openModal}
                    className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                  >
                    <span>Contact Now</span>
                  </button>
                ) : (
                  <Link
                    href={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                    className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                  >
                    <span>Request Price</span>
                  </Link>
                )}
              </div>
            </div>{" "}
            <Facts />
          </div>
        </div>
      </ParallaxContainer>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-2 light-content" : "bg-gray-light-1 "
        }`}
        id="team"
      >
        <Team />
      </section>

      <CustomExamSection />

      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="services"
      >
        {" "}
        <Service />
      </section>

      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <Promo />{" "}
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />

      <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="about"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-xs-30">
            <div className="col-md-6">
              {/* <h2 className="section-caption mb-xs-10">Our Story</h2> */}
              <h3 className="section-title mb-0">
                <AnimatedText text="About Us" />
              </h3>
            </div>
            <div className="col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
              {/* Decorative Dots */}
              <div
                className="decoration-2 d-none d-md-block"
                data-rellax-y=""
                data-rellax-speed="0.7"
                data-rellax-percentage="-0.2"
              >
                <Image
                  width="103"
                  height="223"
                  src="/assets/images/decoration-2.svg"
                  alt=""
                />
              </div>
              {/* End Decorative Dots */}

              {onePage ? (
                <button
                  onClick={openModal}
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Contact Us Now
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Contact Us Now
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>
              ) : (
                <Link
                  href={`/main-pages-about-1${dark ? "-dark" : ""}`}
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Contact Us Now
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Contact Us Now
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Link>
              )}
            </div>
          </div>

          <About />
        </div>
      </section>

      <section
        className="page-section bg-dark bg-dark-alpha-70 light-content"
        style={{
          background: "#FFCD7B",
          // backgroundImage:
          //   "url(/assets/images/full-width-images/section-bg-4.jpg)",
        }}
      >
        <Features />
      </section>
      {/* <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="portfolio"
      >
        <Portfolio />
      </section> */}
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />

      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      {/* <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <Benefits />
      </section> */}

      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="blog"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-xs-30">
            <div className="col-md-6">
              {/* <h2 className="section-caption mb-xs-10">Our Blog</h2> */}
              <h3 className="section-title mb-0">
                <span className="wow charsAnimIn" data-splitting="chars">
                  Video Testimonials
                </span>
              </h3>
            </div>
            {/* <div className="col-md-5 offset-md-1 text-start text-md-end pt-40 pt-sm-20">
              <Link
                href={`/main-blog-columns-2col`}
                className="link-hover-anim underline align-middle"
                data-link-animate="y"
              >
                Read more in our blog <i className="mi-arrow-right size-18" />
              </Link>
            </div> */}
          </div>
          <Blog />
          {/* Blog Posts Grid */}

          {/* End Blog Posts Grid */}
        </div>
      </section>

      <section
        className={`page-section pt-0 pb-0  ${dark ? "light-content" : ""}`}
      >
        {" "}
        {dark ? <Testimonials2 /> : <Testimonials />}
      </section>
      {/* <section className={`page-section  ${dark ? " light-content" : ""}`}>
        {dark ? <Brands2 /> : <Brands />}
      </section> */}

      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <div className="container position-relative">
          <div className="row">
            {/* Images */}
            <div className="col-lg-7 d-flex align-items-start mb-md-60 mb-xs-30">
              <div className="call-action-2-images">
                <div
                  className="call-action-2-image-1"
                  data-rellax-y=""
                  data-rellax-speed="0.5"
                  data-rellax-percentage="0.7"
                >
                  <Image
                    width={386}
                    height={400}
                    src="/assets/images/afd/faq1.png"
                    alt="Image Description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={255}
                  />
                </div>
                <div className="call-action-2-image-2">
                  <Image
                    width={810}
                    height={512}
                    src="/assets/images/afd/FAQ.jpg"
                    alt="Image Description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={134}
                  />
                </div>
                {/* <div
                  className="call-action-2-image-3"
                  data-rellax-y=""
                  data-rellax-speed="-0.5"
                  data-rellax-percentage="0.5"
                >
                  <Image
                    width={386}
                    height={500}
                    src="/assets/images/afd/faq2.png"
                    alt="Image Description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={0}
                  />
                </div> */}
              </div>
            </div>
            {/* End Images */}
            {/* Text */}
            <div className="col-lg-5 d-flex align-items-center">
              <div
                className="wow fadeInUp"
                data-wow-duration="1.2s"
                data-wow-offset={255}
              >
                <h2 className="section-title mb-50 mb-sm-20">How we work? </h2>
                <Faq />
                <div className="local-scroll">
                  {onePage ? (
                    <button
                      onClick={openModal}
                      className="btn btn-mod btn-large btn-round btn-hover-anim"
                    >
                      <span>Contact Us Now</span>
                    </button>
                  ) : (
                    <Link
                      href={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                      className="btn btn-mod btn-large btn-round btn-hover-anim"
                    >
                      <span>Contact Us Now</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            {/* End Text */}
          </div>
        </div>
      </section>

      {/* <section
        className="page-section bg-dark-1 bg-dark-alpha-90 light-content"
        style={{
          backgroundImage:
            "url(/assets/images/full-width-images/section-bg-2.jpg)",
        }}
      >
        <NewsLetter />
      </section> */}
      <CustomSection />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="contact"
      >
        <Contact />{" "}
      </section>
    </>
  );
}
