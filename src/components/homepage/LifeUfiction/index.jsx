"use client"
import MovieCard from "@/components/ui/card/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const LifeUfiction = ({ lifeUfictionData }) => {
    return (
        <section className="trending-reels-section">
            <div className="container">
                <div className="section-content">
                    <div className="section-header">
                        <h2 className="section-title">
                            <strong>LifeUfiction</strong> Movie
                        </h2>
                        <button className="view-all">View All</button>
                    </div>
                </div>
                <div className="full_screen_caraousel">
                    <Swiper modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView="auto"
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: true, pauseOnMouseEnter: true }}
                        className="latest-movies-wrapper">
                        {
                            lifeUfictionData?.map((movie) => (<SwiperSlide key={movie?.id} className="each-movie">
                                <MovieCard movieData={movie} />
                            </SwiperSlide>))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default LifeUfiction;