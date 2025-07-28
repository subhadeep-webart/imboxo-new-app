import styles from "../creator.module.scss";
import ProfileHeader from "@/components/profile/creator/ProfileHeader";
import UplaodMovieForm from "@/components/profile/creator/UploadMovieForm";
const UploadMovie=()=>{
    return(
        <section className={styles.creator_page_container}>
           <ProfileHeader/>
           <UplaodMovieForm/>
        </section>
    )
}

export default UploadMovie;