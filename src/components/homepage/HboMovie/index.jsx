"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const HboMovie = () => {
  return (
    <section className="trending-reels-section">
      <div className="container">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">
              <strong>HBO</strong> Studio
            </h2>
            <button className="view-all">View All</button>
          </div>
          <div className="full_screen_caraousel">
            <Swiper modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView="auto"
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: true, pauseOnMouseEnter: true }}
              className="latest-movies-wrapper"
            >
              <SwiperSlide className="each-movie">
                <>
                  <div className="movie-image">
                    <Image src="/assets/images/latest-movie-1.png" alt="" fill />
                  </div>
                  <div className="movie-info">
                    <div className="movie-details">
                      <h3 className="movie-title">Oppenheimer</h3>
                      <div className="content-details">
                        <div className="rating">
                          <Image
                            src="/assets/icons/star-full.svg"
                            alt=""
                            width={16}
                            height={16}
                          />
                          <span>8.8</span>
                        </div>
                        <span className="year">2023</span>
                        <span className="duration">3h 5m</span>
                      </div>
                    </div>
                    <div className="movie-action">
                      <Image
                        src="/assets/icons/play-in-circle.svg"
                        alt=""
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                </>
              </SwiperSlide>
              <SwiperSlide className="each-movie">
                <>
                  <div className="movie-image">
                    <Image src="/assets/images/latest-movie-2.png" alt="" fill />
                  </div>
                  <div className="movie-info">
                    <div className="movie-details">
                      <h3 className="movie-title">Oppenheimer</h3>
                      <div className="content-details">
                        <div className="rating">
                          <Image
                            src="/assets/icons/star-full.svg"
                            alt=""
                            width={16}
                            height={16}
                          />
                          <span>8.8</span>
                        </div>
                        <span className="year">2023</span>
                        <span className="duration">3h 5m</span>
                      </div>
                    </div>
                    <div className="movie-action">
                      <Image
                        src="/assets/icons/play-in-circle.svg"
                        alt=""
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                </>
              </SwiperSlide>
              <SwiperSlide className="each-movie">
                <>
                  <div className="movie-image">
                    <Image src="/assets/images/latest-movie-3.png" alt="" fill />
                  </div>
                  <div className="movie-info">
                    <div className="movie-details">
                      <h3 className="movie-title">Oppenheimer</h3>
                      <div className="content-details">
                        <div className="rating">
                          <Image
                            src="/assets/icons/star-full.svg"
                            alt=""
                            width={16}
                            height={16}
                          />
                          <span>8.8</span>
                        </div>
                        <span className="year">2023</span>
                        <span className="duration">3h 5m</span>
                      </div>
                    </div>
                    <div className="movie-action">
                      <Image
                        src="/assets/icons/play-in-circle.svg"
                        alt=""
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                </>
              </SwiperSlide>
              <SwiperSlide className="each-movie">
                <>
                  <div className="movie-image">
                    <Image src="/assets/images/latest-movie-1.png" alt="" fill />
                  </div>
                  <div className="movie-info">
                    <div className="movie-details">
                      <h3 className="movie-title">Oppenheimer</h3>
                      <div className="content-details">
                        <div className="rating">
                          <Image
                            src="/assets/icons/star-full.svg"
                            alt=""
                            width={16}
                            height={16}
                          />
                          <span>8.8</span>
                        </div>
                        <span className="year">2023</span>
                        <span className="duration">3h 5m</span>
                      </div>
                    </div>
                    <div className="movie-action">
                      <Image
                        src="/assets/icons/play-in-circle.svg"
                        alt=""
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                </>
              </SwiperSlide>
              <SwiperSlide className="each-movie">
                <>
                  <div className="movie-image">
                    <Image src="/assets/images/latest-movie-2.png" alt="" fill />
                  </div>
                  <div className="movie-info">
                    <div className="movie-details">
                      <h3 className="movie-title">Oppenheimer</h3>
                      <div className="content-details">
                        <div className="rating">
                          <Image
                            src="/assets/icons/star-full.svg"
                            alt=""
                            width={16}
                            height={16}
                          />
                          <span>8.8</span>
                        </div>
                        <span className="year">2023</span>
                        <span className="duration">3h 5m</span>
                      </div>
                    </div>
                    <div className="movie-action">
                      <Image
                        src="/assets/icons/play-in-circle.svg"
                        alt=""
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                </>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section >
  )
}

export default HboMovie;