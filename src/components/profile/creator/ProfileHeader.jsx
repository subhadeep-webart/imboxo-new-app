import styles from "../profile.module.scss";
const ProfileHeader=()=>{
    return(
        <div className={styles.profile_header_container}>
            <p className={styles.heading}>Upload Your Movie INFORMATION</p>
            <p className={styles.summary}>Share your film with the world — add all the details and upload your masterpiece here.</p>
        </div>
    )
}

export default ProfileHeader;