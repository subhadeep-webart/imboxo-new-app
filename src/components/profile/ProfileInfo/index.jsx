import Image from "next/image";
import styles from "../profile.module.scss";
const ProfileInfo=()=>{
    return(
        <div className={styles.profile_info_wrapper}>
            <div className={styles.profile_image}>
                <Image src={"/assets/images/user-avatar.jpg"} fill className="object-cover"/>
            </div>
            <div className={styles.profile_name}>
                
            </div>
        </div>
    );
}

export default ProfileInfo;