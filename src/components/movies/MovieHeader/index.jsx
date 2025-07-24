import { getAllGenres } from "@/server/movies/getAllGenres";
import GenreDropdown from "../GenreDropdown";
const MovieHeader = async ({movieHeaderTextName}) => {
    const allGenres = await getAllGenres();
    console.log("all genres====>",allGenres)
    return (
        <section className="movie_header_container">
            <div className="section-content">
                <div className="section-header">
                    <h2 className="section-title">
                        <strong>{movieHeaderTextName}</strong>
                    </h2>
                    <GenreDropdown allGenres={allGenres}/>
                </div>
            </div>
        </section>
    )
}

export default MovieHeader;