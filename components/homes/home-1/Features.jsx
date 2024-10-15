"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <div className="container position-relative">
      <div className="wow fadeInUp">
        <div className="relative">
          <Swiper
            spaceBetween={0}
            breakpoints={{
              1199: {
                slidesPerView: 3, // When window width is <= 1199px
              },
              768: {
                slidesPerView: 2, // When window width is <= 768px
              },
              480: {
                slidesPerView: 1, // When window width is <= 480px
              },
              200: {
                slidesPerView: 1, // When window width is <= 200px
              },
            }}
            modules={[Navigation, Pagination]}
            loop
            navigation={{
              prevEl: ".snbp3",
              nextEl: ".snbn3",
            }}
            pagination={{
              el: ".sp1",
              clickable: true,
              bulletActiveClass: "active",
              renderBullet: (index, className) => {
                return `<div class=" owl-page ${className}">
                   <span></span>
                  </div>`;
              },
            }}
            watchSlidesProgress
            resizeObserver
            className="item-carousel owl-carousel owl-theme overflow-hidden position-static"
            style={{
              opacity: 1,
              display: "block",
            }}
          >
            {/* Team item */}

            <>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/nandita.png"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Nanditha Rajeev</div>
                  <div className="features-descr">
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos.
                  </div>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/annapoorna.jpg"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Annapoorna</div>
                  <div className="features-descr">
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/sidharth.jpg"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Sidharth Saseedaran</div>
                  <div className="features-descr">
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      src="/assets/images/afd/noble.jpg"
                      style={{ height: "200px", width: "190px" }}
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Noble Thomas</div>
                  <div className="features-descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque congue rhoncus enim, in pharetra lacus.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/geethika.png"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Geethika Jishekal</div>
                  <div className="features-descr">
                    Mauris a libero et diam sodales semper. Aenean elit leo,
                    hendrerit nec dolor id, rutrum finibus velit.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/rasha.png"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Rasha C</div>
                  <div className="features-descr">
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/udhay.jpg"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Udhay K U</div>
                  <div className="features-descr">
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/prat.jpg"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Pratyusha P</div>
                  <div className="features-descr">
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos.
                  </div>
                </div>
              </SwiperSlide>
            </>

            <div className="owl-controls clickable">
              <div className="owl-pagination sp1"></div>
              <div className="owl-buttons">
                <div className="owl-prev snbp3" role="button" tabIndex="0">
                  <span className="visually-hidden">Previous Slide</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    //   xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="27px"
                    height="57px"
                    viewBox="0 0 27 57"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"></path>
                  </svg>
                </div>
                <div className="owl-next snbn3" role="button" tabIndex="0">
                  <span className="visually-hidden">Next Slide</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    //   xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="27px"
                    height="57px"
                    viewBox="0 0 27 57"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"></path>
                  </svg>
                </div>
              </div>
            </div>
            {/* End Team item */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
