import styles from "./commonbanner.module.scss";
const CommonBanner = ({backgroundImage="/assets/images/home-banner-bg.webp"}) => {

    const bannerStyle = {
        background: `linear-gradient(8.18deg, rgba(6, 1, 14, 0.85) 34.12%, rgba(6, 1, 14, 0) 74.52%), url(${backgroundImage}) no-repeat center center`,
        backgroundSize: "cover",
    };
    // 592
    return (
        <section className={styles.banner_section} style={bannerStyle}>
        </section>
    )
}

export default CommonBanner