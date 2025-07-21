"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
const LatestUploadByCreator = ({ movieData }) => {
    console.log("Latest Release Movie Data=====================>", movieData);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <section className="latest-section">
            <div className="container">
                <div className="section-content !flex">
                    <div className="section-info">
                        <h2 className="section-title">
                            <strong>Latest</strong> Uploaded by Creators
                        </h2>
                        <p className="section-description">
                            Worem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
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

                    {/* {
                            movieData?.map((movieData)=>(<MovieCard movieData={movieData} key={movieData?.id}/>))
                        } */}
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
                        className="latest-movies-wrapper"
                        style={{ paddingLeft: "20px !important",width:"75%" }}
                        loop={true}
                        autoplay={true}
                    >
                        <SwiperSlide className="each-movie">
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
                        </SwiperSlide>
                        <SwiperSlide className="each-movie">
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
                        </SwiperSlide>
                        <SwiperSlide className="each-movie">
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
                        </SwiperSlide>
                        <SwiperSlide className="each-movie">
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
                        </SwiperSlide>
                        <SwiperSlide className="each-movie">
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
                        </SwiperSlide>
                        <SwiperSlide className="each-movie">
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
                        </SwiperSlide>
                        <SwiperSlide className="each-movie">
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
                        </SwiperSlide>
                        <SwiperSlide className="each-movie">
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
                        </SwiperSlide>
                        <SwiperSlide className="each-movie">
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
                        </SwiperSlide>
                        <SwiperSlide className="each-movie">
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
                        </SwiperSlide>
                        <SwiperSlide className="each-movie">
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
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default LatestUploadByCreator;