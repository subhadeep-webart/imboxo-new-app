import styles from "../profile.module.scss";
const ProfileBanner = ({ banner_img }) => {
    return (
        <section
            className={styles.profile_banner_section}
            style={{
                backgroundImage: `url(${banner_img || "/assets/images/Profile_bakground_image.webp"})`,
            }}
        >
        </section>
    )
}

export default ProfileBanner;