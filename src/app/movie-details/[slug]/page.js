import MovieBanner from "@/components/movie-details/MovieBanner";
import MovieDetailsSection from "@/components/movie-details/MovieDetailsSection";
import { getFetchMovieFromS3 } from "@/server/movies/getFetchMovieFromS3";
import { getMoviesBySlug } from "@/server/movies/getMoviesBySlug";

const MovieDetails = async ({ params }) => {
    const { slug } = params || {};
    let movieDetails = {};
    let movieVideo = {};
    if (slug) {
        movieDetails = await getMoviesBySlug(slug);
        movieVideo = await getFetchMovieFromS3({ type: "trailer", id: movieDetails?.data.id })
    }

    console.log("Movie Details Page=======>", movieDetails);
    console.log("Movie Details Page1122==================>", movieVideo);
    return (
        <section>
            <div className="banner-section">
                <MovieBanner streamingUrl={movieVideo?.fileUrl ?? ""} />
            </div>
            <div className="container">
                <MovieDetailsSection movieDetails={movieDetails?.data || {}} />
            </div>
        </section>
    )
}

export default MovieDetails;