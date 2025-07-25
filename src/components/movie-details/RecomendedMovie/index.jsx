"use client"
import MovieCard from "@/components/ui/card/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const RecomendedMovie = ({ related_movies }) => {
    return (
        <section className="trending-reels-section">
            <div className="container">
                <div className="section-content">
                    <div className="section-header">
                        <h2 className="section-title">
                            <strong>Recommened</strong> Movie
                        </h2>
                    </div>
                </div>
            </div>
            <Swiper modules={[Autoplay]}
                slidesPerView={4}
                slidesPerGroup={4}
                speed={3000}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: true, pauseOnMouseEnter: true }}
                className="latest-movies-wrapper">
                {
                    related_movies?.map((movie) => (<SwiperSlide key={movie?.id} className="each-movie">
                        <MovieCard movieData={movie} />
                    </SwiperSlide>))
                }
            </Swiper>
        </section>
    )
}

export default RecomendedMovie;