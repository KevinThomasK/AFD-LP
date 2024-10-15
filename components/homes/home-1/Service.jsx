"use client";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React, { useState } from "react";

export default function Service() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Full text
  const fullText = `NIFT has established numerous exam centers across the country, allowing students to select the most convenient location. Exam cities include Kolkata, Patna, Ahmedabad, Bhopal, Kannur, Bhubaneswar, Mumbai, Nagpur, Madurai, Cochin, Lucknow, Chandigarh, Bengaluru, Coimbatore, Dehradun, Pune, Ranchi, Udaipur, Hyderabad, Guwahati, Jaipur, Jodhpur, Surat, Srinagar, Vadodara, Visakhapatnam, Jammu, Chennai, New Delhi, Noida, Faridabad, Ghaziabad, Rajkot, Gurugram, and Daman.`;

  // Text to display before "Read more"
  const shortText = `NIFT has established numerous exam centers across the country, allowing students to select the most convenient location. Exam cities include Kolkata, Patna, Ahmedabad, Bhopal, Kannur,`;
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          {/* <h2 className="section-caption mb-xs-10">Our Services</h2> */}
          <h3 className="section-title mb-30">
            <AnimatedText text="NIFT Entrance Exam 2025" />
          </h3>
          <div className="row">
            <div className="col-lg-10">
              <p
                className="section-descr mb-50 mb-sm-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                NIFT offers undergraduate & postgraduate programs, in fashion
                design, textile design, fashion communication and more.
              </p>
            </div>
          </div>
          <ul
            className="nav nav-tabs services-tabs wow fadeInUp"
            data-wow-delay="0.55s"
            role="tablist"
          >
            <li role="presentation">
              <a
                href="#services-item-1"
                className="active"
                aria-controls="services-item-1"
                role="tab"
                aria-selected="true"
                data-bs-toggle="tab"
              >
                NIFT<span className="number">01</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-2"
                aria-controls="services-item-2"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                NIFT 2025 Entrance <span className="number">02</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-3"
                aria-controls="services-item-3"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                NIFT Exam Centers <span className="number">03</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-4"
                aria-controls="services-item-4"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                GAT <span className="number">04</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-5"
                aria-controls="services-item-5"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                CAT <span className="number">05</span>
              </a>
            </li>
            {/* <li role="presentation">
              <a
                href="#services-item-6"
                aria-controls="services-item-6"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Marketing <span className="number">06</span>
              </a>
            </li> */}
          </ul>
        </div>
        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item show fade active"
              id="services-item-1"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">
                    National Institute of Fashion Technology
                  </h4>
                  <p className="text-gray mb-0">
                    NIFT New Delhi campus was established in 1986. In 1995
                    campuses were set up in Chennai, Gandhinagar, Kolkata,
                    Hyderabad & Mumbai. In 1997, this expanded to Bengaluru.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/afd/nift1.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-2"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Entrance 2025</h4>
                  <p className="text-gray mb-0">
                    NIFT will hold its entrance exams in February 2025.
                    Admission involves a two-stage process: Phase one includes
                    the General Ability Test (GAT) and Creative Ability Test
                    (CAT), while phase two features a situation test and
                    group discussion.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/afd/nift2.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-3"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Exam Centers</h4>
                  <p className="text-gray mb-0">
                    {isExpanded ? fullText : shortText}{" "}
                    {/* Toggle between full and short text */}
                    <span
                      onClick={() => setIsExpanded(!isExpanded)} // Toggle the expanded state
                      className="text-primary"
                      style={{ cursor: "pointer", marginLeft: "5px" }}
                    >
                      {isExpanded ? "Read less" : "Read more"}{" "}
                      {/* Change link text */}
                    </span>
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/afd/nift3.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-4"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">The General Ability Test</h4>
                  <p className="text-gray mb-0">
                    GAT is a key component of the NIFT entrance exam, assessing
                    candidates on various skills including quantitative ability,
                    communication, English comprehension, analytical ability,
                    and general knowledge.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/afd/nift4.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-5"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">The Creative Ability Test</h4>
                  <p className="text-gray mb-0">
                    CAT in the NIFT entrance exam evaluates a candidate&apos;s
                    creative thinking, innovation, drawing skills, and ability
                    to develop new ideas and concepts.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/afd/nift5.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-6"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Marketing</h4>
                  <p className="text-gray mb-0">
                    The core identity reflects consistent associations with the
                    brand whereas the extended identity involves the intricate
                    details of the brand that help generate a constant motif.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-6.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
          </div>
        </div>
      </div>
    </div>
  );
}
