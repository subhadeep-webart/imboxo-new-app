"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";

const slides = [1, 2, 3]; // You already repeat the content 3 times

const HomeBanner = () => {
    return (
        <section className="banner-section">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                className="container"
                // pagination={{
                //     clickable: true,
                //     el: '.banner-custom-pagination',   // Custom pagination container
                // }}
            >
                {slides.map((_, index) => (
                    <SwiperSlide className="" key={index}>
                        <div className="banner-content">
                            <ul className="tags-wrapper">
                                <li className="each-tag">Action</li>
                                <li className="each-tag">Drama</li>
                                <li className="each-tag">Sci-Fi</li>
                                <li className="each-tag">Superhero</li>
                            </ul>
                            <h1 className="banner-title">Avengers: Endgame</h1>
                            <div className="content-info">
                                <ul className="stars-wrapper">
                                    {Array.from({ length: 4 }).map((_, i) => (
                                        <li className="each-star" key={`star-full-${i}`}>
                                            <Image
                                                src="/assets/icons/star-full.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                            />
                                        </li>
                                    ))}
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
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <div className="banner-custom-pagination" /> */}
        </section>
    );
};

export default HomeBanner;
