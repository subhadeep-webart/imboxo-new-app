"use client"
import MovieCard from "@/components/ui/card/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
const LatestUploadByCreator = ({ movieData }) => {
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
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerGroup={3}
                        slidesPerView={3}
                        speed={3000}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        className="latest-movies-wrapper"
                        style={{ paddingLeft: "20px !important" }}
                        loop={true}
                    >
                        {
                            movieData?.map((movieData) => (<SwiperSlide key={movieData?.id} className="each-movie"><MovieCard movieData={movieData} /></SwiperSlide>))
                        }
                    </Swiper>
                </div>
            </div>
        </section >
    )
}

export default LatestUploadByCreator;