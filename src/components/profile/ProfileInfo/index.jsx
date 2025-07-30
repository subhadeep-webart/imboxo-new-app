import Image from "next/image";
import styles from "../profile.module.scss";
import ProfileNavigation from "./ProfileNavigation";
const ProfileInfo = ({ profileNavMenu, name, userName, profile_img }) => {
  return (
    <div className={styles.profile_info_wrapper}>
      <div className={styles.profile_image}>
        <Image
          src={profile_img ? profile_img : "/assets/images/fallback.png"}
          fill
          className="object-cover"
        />
      </div>
      <div className={styles.profile_name}>
        <div>
          <p className={styles.profile_name_text}>{name}</p>
          <p className="text-[#9D9D9D]">@{userName}</p>
        </div>
        <div className={styles.profile_navigation}>
          {profileNavMenu.map((profileNav, index) => (
            <ProfileNavigation
              key={`profile_menu_${index + 1}`}
              profileNav={profileNav}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
