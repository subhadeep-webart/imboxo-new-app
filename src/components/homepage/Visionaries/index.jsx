"use client"
import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Visionaries = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="visionaries-section">
      <div className="container">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">
              <strong>The Visionaries</strong> Behind the Film
            </h2>
            <div className="slider-action">
              <button className="slider-arrow" ref={prevRef}>
                <Image
                  src="assets/icons/slider-arrow-left.svg"
                  alt=""
                  width={17}
                  height={15}
                />
              </button>
              <button className="slider-arrow" ref={nextRef}>
                <Image
                  src="assets/icons/slider-arrow-right.svg"
                  alt=""
                  width={17}
                  height={15}
                />
              </button>
            </div>
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={"auto"}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop={true}
            autoplay={true}
            className="visionaries-wrapper"
            style={{paddingTop:"60px !important"}}
          >
            <SwiperSlide
              className={`each-visionary ${hoveredIndex === 0 ? "visionary-bigger" : ""}`}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`${hoveredIndex === 0 ? "visionary-thumb-bigger" : "visionary-thumb"}`}>
                <Image src="/assets/images/visionary-1.png" alt="" fill />
              </div>
              {hoveredIndex === 0 ? (
                <>
                  <div className="visionary-info">
                    <h4 className="visionary-name">Jordon Sharma</h4>
                    <a className="visionary-role">Follow</a>
                  </div>
                  <p className="visionary-description">
                    Worem ipsum dolor sit amet, consectet adipiscing elit.
                  </p>
                  <div className="visionary-socials">
                    <a className="social-link">
                      <Image src="/assets/icons/twitter.svg" alt="" width={20} height={20} />
                    </a>
                    <a className="social-link">
                      <Image src="/assets/icons/facebook.svg" alt="" width={16} height={20} />
                    </a>
                    <a className="social-link">
                      <Image src="/assets/icons/instagram.svg" alt="" width={20} height={20} />
                    </a>
                    <div className="rating">
                      <Image src="/assets/icons/star-full.svg" alt="" width={16} height={16} />
                      <span>8.8</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h4 className="visionary-name">Jordon Sharma</h4>
                  <a className="visionary-role">Follow</a>
                </>
              )}
            </SwiperSlide>
            <SwiperSlide
              className={`each-visionary ${hoveredIndex === 1 ? "visionary-bigger" : ""}`}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`${hoveredIndex === 1 ? "visionary-thumb-bigger" : "visionary-thumb"}`}>
                <Image src="/assets/images/visionary-2.png" alt="" fill />
              </div>
              {hoveredIndex === 1 ? (
                <>
                  <div className="visionary-info">
                    <h4 className="visionary-name">Jordon Sharma</h4>
                    <a className="visionary-role">Follow</a>
                  </div>
                  <p className="visionary-description">
                    Worem ipsum dolor sit amet, consectet adipiscing elit.
                  </p>
                  <div className="visionary-socials">
                    <a className="social-link">
                      <Image src="/assets/icons/twitter.svg" alt="" width={20} height={20} />
                    </a>
                    <a className="social-link">
                      <Image src="/assets/icons/facebook.svg" alt="" width={16} height={20} />
                    </a>
                    <a className="social-link">
                      <Image src="/assets/icons/instagram.svg" alt="" width={20} height={20} />
                    </a>
                    <div className="rating">
                      <Image src="/assets/icons/star-full.svg" alt="" width={16} height={16} />
                      <span>8.8</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h4 className="visionary-name">Jordon Sharma</h4>
                  <a className="visionary-role">Follow</a>
                </>
              )}
            </SwiperSlide>
            <SwiperSlide
              className={`each-visionary ${hoveredIndex === 2 ? "visionary-bigger" : ""}`}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`${hoveredIndex === 2 ? "visionary-thumb-bigger" : "visionary-thumb"}`}>
                <Image src="/assets/images/visionary-1.png" alt="" fill />
              </div>
              {hoveredIndex === 2 ? (
                <>
                  <div className="visionary-info">
                    <h4 className="visionary-name">Jordon Sharma</h4>
                    <a className="visionary-role">Follow</a>
                  </div>
                  <p className="visionary-description">
                    Worem ipsum dolor sit amet, consectet adipiscing elit.
                  </p>
                  <div className="visionary-socials">
                    <a className="social-link">
                      <Image src="/assets/icons/twitter.svg" alt="" width={20} height={20} />
                    </a>
                    <a className="social-link">
                      <Image src="/assets/icons/facebook.svg" alt="" width={16} height={20} />
                    </a>
                    <a className="social-link">
                      <Image src="/assets/icons/instagram.svg" alt="" width={20} height={20} />
                    </a>
                    <div className="rating">
                      <Image src="/assets/icons/star-full.svg" alt="" width={16} height={16} />
                      <span>8.8</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h4 className="visionary-name">Jordon Sharma</h4>
                  <a className="visionary-role">Follow</a>
                </>
              )}
            </SwiperSlide>
            <SwiperSlide
              className={`each-visionary ${hoveredIndex === 3 ? "visionary-bigger" : ""}`}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`${hoveredIndex === 3 ? "visionary-thumb-bigger" : "visionary-thumb"}`}>
                <Image src="/assets/images/visionary-3.png" alt="" fill />
              </div>
              {hoveredIndex === 3 ? (
                <>
                  <div className="visionary-info">
                    <h4 className="visionary-name">Jordon Sharma</h4>
                    <a className="visionary-role">Follow</a>
                  </div>
                  <p className="visionary-description">
                    Worem ipsum dolor sit amet, consectet adipiscing elit.
                  </p>
                  <div className="visionary-socials">
                    <a className="social-link">
                      <Image src="/assets/icons/twitter.svg" alt="" width={20} height={20} />
                    </a>
                    <a className="social-link">
                      <Image src="/assets/icons/facebook.svg" alt="" width={16} height={20} />
                    </a>
                    <a className="social-link">
                      <Image src="/assets/icons/instagram.svg" alt="" width={20} height={20} />
                    </a>
                    <div className="rating">
                      <Image src="/assets/icons/star-full.svg" alt="" width={16} height={16} />
                      <span>8.8</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h4 className="visionary-name">Jordon Sharma</h4>
                  <a className="visionary-role">Follow</a>
                </>
              )}
            </SwiperSlide>
            <SwiperSlide
              className={`each-visionary ${hoveredIndex === 4 ? "visionary-bigger" : ""}`}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`${hoveredIndex === 4 ? "visionary-thumb-bigger" : "visionary-thumb"}`}>
                <Image src="/assets/images/visionary-1.png" alt="" fill />
              </div>
              {hoveredIndex === 4 ? (
                <>
                  <div className="visionary-info">
                    <h4 className="visionary-name">Jordon Sharma</h4>
                    <a className="visionary-role">Follow</a>
                  </div>
                  <p className="visionary-description">
                    Worem ipsum dolor sit amet, consectet adipiscing elit.
                  </p>
                  <div className="visionary-socials">
                    <a className="social-link">
                      <Image src="/assets/icons/twitter.svg" alt="" width={20} height={20} />
                    </a>
                    <a className="social-link">
                      <Image src="/assets/icons/facebook.svg" alt="" width={16} height={20} />
                    </a>
                    <a className="social-link">
                      <Image src="/assets/icons/instagram.svg" alt="" width={20} height={20} />
                    </a>
                    <div className="rating">
                      <Image src="/assets/icons/star-full.svg" alt="" width={16} height={16} />
                      <span>8.8</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h4 className="visionary-name">Jordon Sharma</h4>
                  <a className="visionary-role">Follow</a>
                </>
              )}
            </SwiperSlide>
            <SwiperSlide
              className={`each-visionary ${hoveredIndex === 5 ? "visionary-bigger" : ""}`}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`${hoveredIndex === 5 ? "visionary-thumb-bigger" : "visionary-thumb"}`}>
                <Image src="/assets/images/visionary-1.png" alt="" fill />
              </div>
              {hoveredIndex === 0 ? (
                <>
                  <div className="visionary-info">
                    <h4 className="visionary-name">Jordon Sharma</h4>
                    <a className="visionary-role">Follow</a>
                  </div>
                  <p className="visionary-description">
                    Worem ipsum dolor sit amet, consectet adipiscing elit.
                  </p>
                  <div className="visionary-socials">
                    <a className="social-link">
                      <Image src="/assets/icons/twitter.svg" alt="" width={20} height={20} />
                    </a>
                    <a className="social-link">
                      <Image src="/assets/icons/facebook.svg" alt="" width={16} height={20} />
                    </a>
                    <a className="social-link">
                      <Image src="/assets/icons/instagram.svg" alt="" width={20} height={20} />
                    </a>
                    <div className="rating">
                      <Image src="/assets/icons/star-full.svg" alt="" width={16} height={16} />
                      <span>8.8</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h4 className="visionary-name">Jordon Sharma</h4>
                  <a className="visionary-role">Follow</a>
                </>
              )}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Visionaries;
