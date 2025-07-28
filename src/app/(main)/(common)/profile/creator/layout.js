import ProfileBanner from "@/components/profile/ProfileBanner"
import ProfileInfo from "@/components/profile/ProfileInfo"
const CreatorLayout = ({ children }) => {
    return (
        <section className="creator_section">
            <div className="container" style={{ paddingTop: "101px" }}>
                <ProfileBanner />
                <div className="profile_page_container">
                    <ProfileInfo />
                </div>
                {children}
            </div>
        </section>
    )
}

export default CreatorLayout