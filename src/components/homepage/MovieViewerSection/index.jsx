"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import { useRef } from "react";
import 'swiper/css/effect-fade';

const MovieViewerSection = () => {
    const nextRef = useRef(null);
    const prevRef = useRef(null);
    return (
        <section className="movie-slider-wrapper">
            <div className="container">
                <Swiper modules={[Navigation,EffectFade]}
                    // spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    effect="fade"
                    fadeEffect={{ crossFade: true }} // optional: smooth cross fade
                    speed={3000}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    style={{ position: "relative" }}>
                    <SwiperSlide className="movie-slider">
                        <div className="banner-content">
                            <ul className="tags-wrapper">
                                <li className="each-tag">Action</li>
                                <li className="each-tag">Drama</li>
                                <li className="each-tag">Sci-Fi</li>
                                <li className="each-tag">Superhero</li>
                            </ul>
                            <h1 className="banner-title">Avengers: Endgame</h1>
                            <div className="py-20 pl-20">
                                <div className="content-info">
                                    <ul className="stars-wrapper">
                                        <li className="each-star">
                                            <Image
                                                src="/assets/icons/star-full.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                        </li>
                                        <li className="each-star">
                                            <Image
                                                src="/assets/icons/star-full.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                        </li>
                                        <li className="each-star">
                                            <Image
                                                src="/assets/icons/star-full.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                        </li>
                                        <li className="each-star">
                                            <Image
                                                src="/assets/icons/star-full.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                        </li>
                                        <li className="each-star">
                                            <Image
                                                src="/assets/icons/star-empty.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                        </li>
                                    </ul>
                                    <span className="year">2023</span>
                                    <span className="duration">3h 5m</span>
                                </div>
                                <div className="description">
                                    Endgame, the Marvel Cinematic Universe delivers a powerful and
                                    emotional conclusion to over a decade of interconnected
                                    storytelling. Following the devastating events of Infinity
                                    <button className="see-more-button">More</button>
                                </div>
                                <div className="banner-action">
                                    <button className="button button-pill button-theme">
                                        Watch Movie{" "}
                                        <Image
                                            src="/assets/icons/play-in-circle.svg"
                                            alt=""
                                            width={16}
                                            height={16}
                                        />
                                    </button>
                                    <button className="add-to-list">
                                        <Image
                                            src="/assets/icons/bookmark.svg"
                                            alt=""
                                            width={24}
                                            height={24}
                                        />
                                        <span>Save For Later</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="movie-slider">
                        <div className="banner-content">
                            <ul className="tags-wrapper">
                                <li className="each-tag">Drama</li>
                                <li className="each-tag">Sci-Fi</li>
                                <li className="each-tag">Superhero</li>
                            </ul>
                            <h1 className="banner-title">Avengers: Endgame</h1>
                            <div className="py-20 pl-20">
                                <div className="content-info">
                                    <ul className="stars-wrapper">
                                        <li className="each-star">
                                            <Image
                                                src="/assets/icons/star-full.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                        </li>
                                        <li className="each-star">
                                            <Image
                                                src="/assets/icons/star-full.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                        </li>
                                        <li className="each-star">
                                            <Image
                                                src="/assets/icons/star-full.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                        </li>
                                        <li className="each-star">
                                            <Image
                                                src="/assets/icons/star-full.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                        </li>
                                        <li className="each-star">
                                            <Image
                                                src="/assets/icons/star-empty.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                        </li>
                                    </ul>
                                    <span className="year">2023</span>
                                    <span className="duration">3h 5m</span>
                                </div>
                                <div className="description">
                                    Endgame, the Marvel Cinematic Universe delivers a powerful and
                                    emotional conclusion to over a decade of interconnected
                                    storytelling. Following the devastating events of Infinity
                                    <button className="see-more-button">More</button>
                                </div>
                                <div className="banner-action">
                                    <button className="button button-pill button-theme">
                                        Watch Movie{" "}
                                        <Image
                                            src="/assets/icons/play-in-circle.svg"
                                            alt=""
                                            width={16}
                                            height={16}
                                        />
                                    </button>
                                    <button className="add-to-list">
                                        <Image
                                            src="/assets/icons/bookmark.svg"
                                            alt=""
                                            width={24}
                                            height={24}
                                        />
                                        <span>Save For Later</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="movie-slider">
                        <div className="banner-content">
                            <ul className="tags-wrapper">
                                <li className="each-tag">Action</li>
                                <li className="each-tag">Drama</li>
                                <li className="each-tag">Sci-Fi</li>
                                <li className="each-tag">Superhero</li>
                            </ul>
                            <h1 className="banner-title">Avengers: Endgame</h1>
                            <div className="py-20 pl-20">
                                <div className="content-info">
                                    <ul className="stars-wrapper">
                                        <li className="each-star">
                                            <Image
                                                src="/assets/icons/star-full.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                        </li>
                                        <li className="each-star">
                                            <Image
                                                src="/assets/icons/star-full.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                        </li>
                                        <li className="each-star">
                                            <Image
                                                src="/assets/icons/star-full.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                        </li>
                                        <li className="each-star">
                                            <Image
                                                src="/assets/icons/star-full.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                        </li>
                                        <li className="each-star">
                                            <Image
                                                src="/assets/icons/star-empty.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                        </li>
                                    </ul>
                                    <span className="year">2023</span>
                                    <span className="duration">3h 5m</span>
                                </div>
                                <div className="description">
                                    Endgame, the Marvel Cinematic Universe delivers a powerful and
                                    emotional conclusion to over a decade of interconnected
                                    storytelling. Following the devastating events of Infinity
                                    <button className="see-more-button">More</button>
                                </div>
                                <div className="banner-action">
                                    <button className="button button-pill button-theme">
                                        Watch Movie{" "}
                                        <Image
                                            src="/assets/icons/play-in-circle.svg"
                                            alt=""
                                            width={16}
                                            height={16}
                                        />
                                    </button>
                                    <button className="add-to-list">
                                        <Image
                                            src="/assets/icons/bookmark.svg"
                                            alt=""
                                            width={24}
                                            height={24}
                                        />
                                        <span>Save For Later</span>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </SwiperSlide>
                    <div className="absolute left-20 bottom-10 z-10">
                        <div className="slider-action movie-view-action">
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
                </Swiper>
            </div>
        </section>
    )
}

export default MovieViewerSection;