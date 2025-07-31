import styles from "../profile.module.scss";
const AwardsComponent = () => {
    return (
        <div className={styles.profile_header_button_container}>
            <p className={styles.heading}>My Awards</p>
            <button className="navbar__cta">
                Add Awards
            </button>
        </div>
    )
}

export default AwardsComponent;