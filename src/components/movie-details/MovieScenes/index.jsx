import styles from "./moviescenes.module.scss";
import Image from "next/image";
const MovieScenes = () => {
    return (
        <section className="trending-reels-section">
            <div className="container">
                <div className="section-content">
                    <div className="section-header">
                        <h2 className="section-title">
                            <strong>scenes</strong> scenes from the movie
                        </h2>
                    </div>
                </div>
                <div className={styles.masonary_grid}>
                    <div className={`${styles.grid_item} ${styles.one}`}>
                        <Image src="/assets/images/movie_img_1.png" alt="Image 1" className={styles.grid_image} fill/>
                    </div>
                    <div className={`${styles.grid_item} ${styles.two}`}>
                        <Image src="/assets/images/movie_img_1.png" alt="Image 2" className={styles.grid_image} fill/>
                    </div>
                    <div className={`${styles.grid_item} ${styles.three}`}>
                        <Image src="/assets/images/movie_img_2.jpg" alt="Image 3" className={styles.grid_image} fill/>
                    </div>
                    <div className={`${styles.grid_item} ${styles.four}`}>
                        <Image src="/assets/images/movie_img_3.jpg" alt="Image 4" className={styles.grid_image} fill/>
                    </div>
                    <div className={`${styles.grid_item} ${styles.five}`}>
                        <Image src="/assets/images/movie_img_4.jpg" alt="Image 5" className={styles.grid_image} fill/>
                    </div>
                    <div className={`${styles.grid_item} ${styles.six}`}>
                        <Image src="/assets/images/movie_img_1.png" alt="Image 6" className={styles.grid_image} fill/>
                    </div>
                    <div className={`${styles.grid_item} ${styles.seven}`}>
                        <Image src="/assets/images/movie_img_1.png" alt="Image 7" className={styles.grid_image} fill/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MovieScenes;