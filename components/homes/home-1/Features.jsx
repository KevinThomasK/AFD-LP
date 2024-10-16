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
                slidesPerView: 4, // When window width is <= 1199px
              },
              768: {
                slidesPerView: 3, // When window width is <= 768px
              },
              480: {
                slidesPerView: 2, // When window width is <= 480px
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
                      src="/assets/images/afd/Aamiya.png"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Aamiya</div>
                  <div className="features-descr">
                    <h4 style={{ fontSize: "15px" }}>Leather Design </h4>
                    <h4 style={{ fontSize: "13px" }}>NIFT Delhi </h4>
                  </div>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/Ajanya.png"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Ajanya</div>
                  <div className="features-descr">
                    <h4 style={{ fontSize: "15px" }}>Leather Design </h4>
                    <h4 style={{ fontSize: "13px" }}>NIFT Chennai </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/anju.jpeg"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Anju Srinivasan</div>
                  <div className="features-descr">
                    <h4 style={{ fontSize: "15px" }}>Fashion Design </h4>
                    <h4 style={{ fontSize: "13px" }}>NIFT Chennai </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/rosarene.jpeg"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Rosarene Joby</div>
                  <div className="features-descr">
                    <h4 style={{ fontSize: "15px" }}>Accessory Design </h4>
                    <h4 style={{ fontSize: "13px" }}>NIFT Hyderabad </h4>
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
                    <h4 style={{ fontSize: "15px" }}>Fashion Design </h4>
                    <h4 style={{ fontSize: "13px" }}>NIFT Delhi </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/Gayathri.jpg"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Gayathri Sanjay</div>
                  <div className="features-descr">
                    <h4 style={{ fontSize: "15px" }}>Fashion Design </h4>
                    <h4 style={{ fontSize: "13px" }}>NIFT Bangalore </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/Geethanjali.jpeg"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Geethanjali V K</div>
                  <div className="features-descr">
                    <h4 style={{ fontSize: "15px" }}>Textile Design </h4>
                    <h4 style={{ fontSize: "13px" }}>NIFT Chennai </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/issa.png"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Issa Mariyam</div>
                  <div className="features-descr">
                    <h4 style={{ fontSize: "15px" }}>Fashion Design </h4>
                    <h4 style={{ fontSize: "13px" }}>NIFT Hyderabad </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/meera.jpg"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Neha S</div>
                  <div className="features-descr">
                    <h4 style={{ fontSize: "15px" }}>Textile Design </h4>
                    <h4 style={{ fontSize: "13px" }}>NIFT Kannur </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/Nandana.jpg"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Nandana Manoj</div>
                  <div className="features-descr">
                    <h4 style={{ fontSize: "15px" }}>Fashion Communication</h4>
                    <h4 style={{ fontSize: "13px" }}>NIFT Mumbai </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/Navneeth.png"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Navneeth K</div>
                  <div className="features-descr">
                    <h4 style={{ fontSize: "15px" }}>Fashion Communication</h4>
                    <h4 style={{ fontSize: "13px" }}>NIFT Mumbai </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/siddarth.jpeg"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Siddarth S</div>
                  <div className="features-descr">
                    <h4 style={{ fontSize: "15px" }}>Fashion Communication</h4>
                    <h4 style={{ fontSize: "13px" }}>NIFT Hyderabad </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/Smita.jpg"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Smriti A</div>
                  <div className="features-descr">
                    <h4 style={{ fontSize: "15px" }}>Fashion Communication</h4>
                    <h4 style={{ fontSize: "13px" }}>NIFT Chennai </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/Sreeram.jpg"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Sreeram S</div>
                  <div className="features-descr">
                    <h4 style={{ fontSize: "15px" }}>Fashion Communication</h4>
                    <h4 style={{ fontSize: "13px" }}>NIFT Bangalore </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/Arya.png"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Arya Rajeev</div>
                  <div className="features-descr">
                    <h4 style={{ fontSize: "15px" }}>M.Des </h4>
                    <h4 style={{ fontSize: "13px" }}>NIFT Kannur </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/Athulya.png"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Athulya M V</div>
                  <div className="features-descr">
                    <h4 style={{ fontSize: "15px" }}>Fashion Design </h4>
                    <h4 style={{ fontSize: "13px" }}>NIFT Chennai</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <img
                      style={{ height: "200px", width: "190px" }}
                      src="/assets/images/afd/devananda.png"
                      alt="logo"
                    />
                  </div>
                  <div className="features-title">Devananda</div>
                  <div className="features-descr">
                    <h4 style={{ fontSize: "15px" }}>Accessory Design </h4>
                    <h4 style={{ fontSize: "13px" }}>NIFT Chennai</h4>
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
