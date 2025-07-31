"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Navigation } from "swiper/modules";
import MovieCard from "@/components/ui/card/MovieCard";
import 'swiper/css/effect-fade';
import { useRef } from "react";
import { usePreventWindowScroll } from "@/hooks/usePreventWindowScroll";
const EachMovieSection = ({ movieCategoryName, movieListData }) => {
    const swiperContainerRef=useRef(null);
    const totalSlides = movieListData?.length || 0;
    const remainder = totalSlides % 4;
    const slidesToAdd = remainder === 0 ? 0 : 4 - remainder;

    const finalSlides = [
        ...movieListData,
        ...movieListData.slice(0, slidesToAdd) // clone first few to fill last group
    ];

    usePreventWindowScroll(swiperContainerRef);
    return (
        <section className="trending-reels-section">
            <div className="container">
                <div className="section-content">
                    <div className="section-header">
                        <h2 className="section-title">
                            <strong>{movieCategoryName}</strong> Movie
                        </h2>
                        <button className="view-all">View All</button>
                    </div>
                </div>
            </div>
            <Swiper modules={[Autoplay, Navigation,Mousewheel]}
                slidesPerView={4}
                slidesPerGroup={4}
                speed={3000}
                mousewheel={true}
                loop={true}
                navigation={true}
                autoplay={{ delay: 2000, disableOnInteraction: true, pauseOnMouseEnter: true }}
                className="latest-movies-wrapper" ref={swiperContainerRef}>
                {
                    finalSlides?.map((movie) => (<SwiperSlide key={movie?.id}>
                        <MovieCard movieData={movie} />
                    </SwiperSlide>))
                }
            </Swiper>
        </section>
    )
}


export default EachMovieSection;