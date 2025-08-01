import ProfileHeader from "@/components/profile/creator/ProfileHeader";
import UplaodMovieForm from "@/components/forms/ProfileForm/UploadMovieForm";
import { getAllCasts } from "@/server/movies/getAllCasts";
import { getAllCrews } from "@/server/movies/getAllCrews";
import { getAllQuality } from "@/server/movies/getAllQuality";
import { getAllLanguages } from "@/server/movies/getAllLanguages";
import { getAllGenres } from "@/server/movies/getAllGenres";
const UploadMovie = async () => {
    const allGenres = await getAllGenres();
    const allQualities = await getAllQuality();
    const allCrews = await getAllCrews();
    const allCasts = await getAllCasts();
    const allLanguages = await getAllLanguages();
    return (
        <section className="profile_page_container">
            <div className="!space-y-8 !my-16">
                <ProfileHeader />
                <UplaodMovieForm allGenres={allGenres} allQualities={allQualities} allCrews={allCrews} allCasts={allCasts} allLanguages={allLanguages} />
            </div>
        </section>
    )
}

export default UploadMovie;