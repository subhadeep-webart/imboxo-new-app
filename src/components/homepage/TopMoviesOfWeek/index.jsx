"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import MovieCategoryTagBadge from "./MovieCategoryTagBadge";
import MovieGenreList from "./MovieGenreList";
import TopRankMovieList from "./TopRankMovieList";
const TopMoviesOfWeek = ({ topMoviesOfWeekData }) => {
    console.log("Top movies of week data inside the component", topMoviesOfWeekData);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (topMoviesOfWeekData.length < 0) return null;

    // const currentMovie = topMoviesOfWeekData[currentIndex];

    // const handleNext = () => {
    //     const newIndex = (currentIndex + 1) % topMoviesOfWeekData.length;
    //     setCurrentIndex(newIndex);
    // };

    // const handlePrev = () => {
    //     const newIndex =
    //         (currentIndex - 1 + topMoviesOfWeekData.length) %
    //         topMoviesOfWeekData.length;
    //     setCurrentIndex(newIndex);
    // };
    const [movieList, setMovieList] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(null);

    const { genreList = [], name, thumbnail } = currentMovie || {};

    useEffect(() => {
        if (topMoviesOfWeekData?.length) {
            setMovieList(topMoviesOfWeekData);
            setCurrentMovie(topMoviesOfWeekData[0]);
        }
    }, [topMoviesOfWeekData]);

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
        <section className="top-rank-section">
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
                    <div className="banner-content">
                        {
                            genreList.length > 0 && <MovieGenreList genreList={genreList} />
                        }
                        <h1 className="banner-title">{name}</h1>
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
                        <p className="description">
                            Endgame, the Marvel Cinematic Universe delivers a powerful and
                            emotional conclusion tInfinity More
                            <button className="see-more-button">More</button>
                        </p>
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
                        </div>
                    </div>
                    {
                        movieList?.length > 0 && <TopRankMovieList movieListData={movieList} />
                    }
                </div>
            </div>
        </section>
    )
}

export default TopMoviesOfWeek;