import Image from "next/image";
import styles from "../moviedetails.module.scss";
import { WISHLIST_ICON } from "@/utils/icons";
const MovieDetailsSection = ({ movieDetails }) => {
    const { name, poster } = movieDetails;

    return (
        <div className="w-full grid grid-cols-12 gap-6">
            <div className="col-span-4">
                <div className={styles.movie_image_container}>
                    <Image
                        src={poster}
                        fill
                        alt={`${name}-image`}
                        className="object-cover rounded-md"
                    />
                </div>
            </div>

            <div className="col-span-8 w-full flex flex-col justify-center items-center gap-3">
                {/* Movie info content here */}
                <div className="flex justify-between items-center">
                    <div className={styles.movie_title_wrapper}>
                        <h1 className={`${styles.movie_title} line-clamp-1`}>Avengers: Endgame</h1>
                    </div>
                    <div>
                        <ul className="tags-wrapper">
                            <li className="each-tag">Action</li>
                            <li className="each-tag">Drama</li>
                            <li className="each-tag">Sci-Fi</li>
                            <li className="each-tag">Superhero</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <div className="flex gap-2 items-center">
                        <div>
                            <p className="text-purple">Creator</p>
                            <p>Christopher Nolan</p>
                        </div>
                        <div>
                            <p className="text-purple">Creator</p>
                            <p>Christopher Nolan</p>
                        </div>
                    </div>
                    <div>
                        <Image height={36} width={36} src={WISHLIST_ICON?.src} alt="Click To Add Watch List"/>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="text-purple">Story Plot</p>
                    <p>
                        In the near future, Earth is facing environmental collapse. Massive dust storms, crop failures, and a dwindling food supply threaten humanity’s survival. Former NASA pilot Cooper lives on a farm with his daughter Murph and son Tom. Murph believes there’s a "ghost" in her room communicating through gravity anomalies.Cooper and Murph discover coordinates encoded in dust, leading them to a secret NASA facility led by Professor Brand.He reveals that Earth is dying, and NASA has been working on a plan to save humanity by traveling through a wormhole near Saturn, which leads to another galaxy with potentially habitable planets.Cooper agrees to pilot the mission, leaving Murph heartbroken.
                    </p>
                </div>
                <div className="visionaries-wrapper">
                    <div className="each-visionary">
                        <div className="visionary-thumb">
                            <Image src="/assets/images/visionary-1.png" alt="" fill />
                        </div>
                        <h4 className="visionary-name">Jordon Sharma</h4>
                        <a className="visionary-role">Follow</a>
                    </div>
                    <div className="each-visionary">
                        <div className="visionary-thumb">
                            <Image src="/assets/images/visionary-1.png" alt="" fill />
                        </div>
                        <h4 className="visionary-name">Jordon Sharma</h4>
                        <a className="visionary-role">Follow</a>
                    </div>
                    <div className="each-visionary">
                        <div className="visionary-thumb">
                            <Image src="/assets/images/visionary-1.png" alt="" fill />
                        </div>
                        <h4 className="visionary-name">Jordon Sharma</h4>
                        <a className="visionary-role">Follow</a>
                    </div>
                    <div className="each-visionary">
                        <div className="visionary-thumb">
                            <Image src="/assets/images/visionary-1.png" alt="" fill />
                        </div>
                        <h4 className="visionary-name">Jordon Sharma</h4>
                        <a className="visionary-role">Follow</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MovieDetailsSection;