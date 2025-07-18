import Image from "next/image";
const HomeBanner = () => {
    return (
        <section className="banner-section">
            <div className="container">
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
                    {/* <p className="description">
                        Endgame, the Marvel Cinematic Universe delivers a powerful and
                        emotional conclusion to over a decade of interconnected
                        storytelling. Following the devastating events of Infinity
                        <span><button className="see-more-button">More</button></span>
                    </p> */}
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
        </section>
    )
}

export default HomeBanner;