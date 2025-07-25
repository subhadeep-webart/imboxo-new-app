import { motion } from "framer-motion";
import Link from "next/link";
import MovieGenreList from "./MovieGenreList";
import Image from "next/image";
const TopMoviesBannerContent = ({ currentMovie }) => {
    console.log("data", currentMovie);
    const { genreList = [], name, duration, description, slug } = currentMovie || {};
    return (
        <div className="banner-content">
            {
                genreList.length > 0 && <MovieGenreList genreList={genreList.slice(0, 4)} />
            }
            {/* <h1 className="banner-title line-clamp-1">{name}</h1> */}
            <motion.h1
                key={crypto.randomUUID()}
                className="banner-title line-clamp-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x:0 }}
                transition={{ delay: genreList.length * 0.3 - 0.6 }}
            >
                {name}
            </motion.h1>
            <motion.div className="content-info" initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} transition={{ delay: genreList.length * 0.3 }} key={crypto.randomUUID()}>
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
                <span className="duration">{duration}</span>
            </motion.div>
            <motion.p className="description" initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} transition={{ delay: genreList.length * 0.3 }} key={crypto.randomUUID()}>
                {"Endgame, the Marvel Cinematic Universe delivers a powerful and emotional conclusion tInfinity"}
                <button className="see-more-button">More</button>
            </motion.p>
            <motion.div className="banner-action" initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} transition={{ delay: genreList.length * 0.3 }} key={crypto.randomUUID()}>
                <Link href={`/movie-details/${slug}`} className="button button-pill button-theme">
                    Watch Movie{" "}
                    <Image
                        src="/assets/icons/play-in-circle.svg"
                        alt=""
                        width={16}
                        height={16}
                    />
                </Link>
            </motion.div>
        </div>
    )
}

export default TopMoviesBannerContent;