"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import TopRankMovieList from "./TopRankMovieList";
import TopMoviesBannerContent from "./TopMoviesBannerContent";
const TopMoviesOfWeek = ({ topMoviesOfWeekData }) => {

    if (topMoviesOfWeekData.length < 0) return null;

    const [movieList, setMovieList] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(null);

    const { thumbnail } = currentMovie || {}

    useEffect(() => {
        if (topMoviesOfWeekData?.length) {
            setMovieList(topMoviesOfWeekData);
            setCurrentMovie(topMoviesOfWeekData[0]);
        }
    }, [topMoviesOfWeekData]);

    useEffect(() => {
        const autoSlideInterval = setInterval(() => {
            handleNext();
        }, 4000);

        return () => clearInterval(autoSlideInterval);
    }, [movieList]);

    const handleNext = () => {
        const rotatedList = [...movieList.slice(1), movieList[0]];
        setMovieList(rotatedList);
        setCurrentMovie(rotatedList[0]);
    };

    const handlePrev = () => {
        const rotatedList = [movieList[movieList.length - 1], ...movieList.slice(0, movieList.length - 1)];
        setMovieList(rotatedList);
        setCurrentMovie(rotatedList[0]);
    };

    return (
        <section className="top-rank-section" style={{ background: `url(${thumbnail}) no-repeat center center` }}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        <strong>Top Movies</strong> of the week
                    </h2>
                    <div className="slider-action">
                        <button className="slider-arrow" onClick={handlePrev}>
                            <Image
                                src="assets/icons/slider-arrow-left.svg"
                                alt=""
                                width={17}
                                height={15}
                            />
                        </button>
                        <button className="slider-arrow" onClick={handleNext}>
                            <Image
                                src="assets/icons/slider-arrow-right.svg"
                                alt=""
                                width={17}
                                height={15}
                            />
                        </button>
                    </div>
                </div>
                <div className="wrapper">
                    <TopMoviesBannerContent currentMovie={currentMovie} />
                    {
                        movieList?.length > 0 && <TopRankMovieList movieListData={movieList} />
                    }
                </div>
            </div>
        </section>
    )
}

export default TopMoviesOfWeek;