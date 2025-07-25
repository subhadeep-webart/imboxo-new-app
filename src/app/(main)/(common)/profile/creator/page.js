import ProfileBanner from "@/components/profile/ProfileBanner"
import ProfileInfo from "@/components/profile/ProfileInfo"

const Creator = () => {
    return (
        <section className="creator_section">
            <div className="container" style={{ paddingTop: "101px" }}>
                <ProfileBanner />
                <div className="profile_page_container">
                    <ProfileInfo />
                </div>
            </div>
        </section>
    )
}

export default Creator