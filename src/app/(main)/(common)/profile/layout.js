import ProfileBanner from "@/components/profile/ProfileBanner";
import ProfileInfo from "@/components/profile/ProfileInfo";
import { getUserDetailsById } from "@/server/users/getUserDetailsById";
import {
  CREATOR_PROFILE_NAVIGATION,
  USER_PROFILE_NAVIGATION,
} from "@/utils/constant";
const CreatorLayout = async ({ children }) => {
  const userDetails = await getUserDetailsById();
  const user_type = userDetails?.user_type;

  const profileNavMenu =
    user_type === "creator"
      ? CREATOR_PROFILE_NAVIGATION
      : USER_PROFILE_NAVIGATION;

  return (
    <section className="creator_section">
      <div className="container" style={{ paddingTop: "101px" }}>
        <ProfileBanner banner_img={userDetails?.banner_img} />
        <div className="profile_page_container">
          <ProfileInfo
            profileNavMenu={profileNavMenu}
            name={userDetails?.name || ""}
            userName={userDetails?.username || ""}
            profile_img={userDetails?.profile_img}
          />
        </div>
        {children}
      </div>
    </section>
  );
};

export default CreatorLayout;
