import Image from "next/image";
import styles from "../profile.module.scss";
import { CREATOR_PROFILE_NAVIGATION } from "@/utils/constant";
import Link from "next/link";
const ProfileInfo = () => {
    return (
        <div className={styles.profile_info_wrapper}>
            <div className={styles.profile_image}>
                <Image src={"/assets/images/user-avatar.jpg"} fill className="object-cover" />
            </div>
            <div className={styles.profile_name}>
                <div>
                    <p className={styles.profile_name_text}>Sarthak Sharma</p>
                    <p className="text-[#9D9D9D]">@sankar2548</p>
                </div>
                <div className={styles.profile_navigation}>
                    {
                        CREATOR_PROFILE_NAVIGATION.map((profileNav, index) => (
                            <Link className={styles.profile_nav_menu} key={`profile_menu_${index + 1}`} href={"#"}>
                                {profileNav?.label}
                            </Link>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default ProfileInfo;