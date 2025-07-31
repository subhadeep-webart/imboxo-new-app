import styles from "./mymovies.module.scss";
const SubscriptionSection = () => {
    return (
        <div className={styles.subscription_section}>
            <p className={styles.subscription_text_container}>
                You do not have any active plan right now, Subscribe now to enjoy latest movies.
            </p>
            <button className="navbar__cta">
                Subscribe Now
            </button>
        </div>
    )
}

export default SubscriptionSection;