import Image from "next/image";
import styles from "./moviedetails.module.scss";
import { WISHLIST_ICON } from "@/utils/icons";
import { formatDate } from "@/utils/helper";

const MovieDetailsSection = ({ movieDetails }) => {
    const { name, poster, description, genre = [], director, release_date, duration } = movieDetails;
    console.log("Movie Details====12", genre);
    return (
        <section className={styles.movie_details_wrapper}>
            <div className={styles.movie_image_container}>
                <Image
                    src={poster}
                    fill
                    alt={`${name}-image`}
                    className="object-cover rounded-md"
                />
            </div>
            <div className="w-full flex flex-col justify-start items-center gap-3">
                {/* Movie info content here */}
                <div className="w-full flex justify-between items-start z-[999]">
                    <div className={styles.movie_title_wrapper}>
                        <h1 className={`${styles.movie_title} line-clamp-1`}>{name}</h1>
                        <div className="flex gap-4 w-full">
                            <div className="w-36 flex gap-2 items-start">
                                <Image
                                    src="/assets/icons/star-full.svg"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                                <span className="text-white">8.8</span>
                            </div>
                            <span className="w-36 text-white">{formatDate(release_date)}</span>
                            <span className="w-36 text-white">{duration}</span>
                        </div>
                    </div>
                    <div>
                        <ul className="tags-wrapper">
                            {
                                genre.map((genreData, index) => (<li className="each-tag" key={`genre-${index + 1}`}>{genreData?.name}</li>))
                            }
                        </ul>
                    </div>
                </div>
                <div className="w-full flex justify-between items-end z-[999]">
                    <div className="flex gap-8 justify-start items-start w-[80%]">
                        <div>
                            <p className="text-purple">Creator</p>
                            <p className={styles.paragraph_text}>{director}</p>
                        </div>
                        <div>
                            <p className="text-purple">Creator</p>
                            <p className={styles.paragraph_text}>Christopher Nolan</p>
                        </div>
                    </div>
                    <div className="w-[20%] flex justify-end items-center">
                        <Image height={36} width={36} src={WISHLIST_ICON?.src} alt="Click To Add Watch List" />
                    </div>
                </div>
                <div className="space-y-2 w-full">
                    <p className="text-purple">Story Plot</p>
                    <p className={styles.paragraph_text}>
                        {description}
                    </p>
                </div>
                <div className={styles.cast_wrapper}>
                    <div className={styles.each_cast}>
                        <div className={styles.cast_thumb}>
                            <Image src="/assets/images/visionary-1.png" alt="" fill />
                        </div>
                        <h4 className={styles.cast_name}>Jordon Sharma</h4>
                    </div>
                    <div className={styles.each_cast}>
                        <div className={styles.cast_thumb}>
                            <Image src="/assets/images/visionary-1.png" alt="" fill />
                        </div>
                        <h4 className={styles.cast_name}>Jordon Sharma</h4>
                    </div>
                    <div className={styles.each_cast}>
                        <div className={styles.cast_thumb}>
                            <Image src="/assets/images/visionary-1.png" alt="" fill />
                        </div>
                        <h4 className={styles.cast_name}>Jordon Sharma</h4>
                    </div>
                    <div className={styles.each_cast}>
                        <div className={styles.cast_thumb}>
                            <Image src="/assets/images/visionary-1.png" alt="" fill />
                        </div>
                        <h4 className={styles.cast_name}>Jordon Sharma</h4>
                    </div>
                    <div className={styles.cast_view_more}>
                        <p className="text-[#9875F6] text-xs text-center">View Cast & Crew</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default MovieDetailsSection;