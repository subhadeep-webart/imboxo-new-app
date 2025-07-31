import AwardsComponent from "@/components/profile/AwardsComponent";
import styles from "../profile.module.scss";
const Awards = () => {
    return (
        <section className="profile_page_container">
            <div className={styles.profile_page_wrapper}>
                <AwardsComponent />
            </div>
        </section>
    )
}

export default Awards;