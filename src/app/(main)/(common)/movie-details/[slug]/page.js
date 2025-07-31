import CommonBanner from "@/components/common/CommonBanner";
import MovieBanner from "@/components/movie-details/MovieBanner";
import MovieDetailsSection from "@/components/movie-details/MovieDetailsSection";
import MovieScenes from "@/components/movie-details/MovieScenes";
import RecomendedMovie from "@/components/movie-details/RecomendedMovie";
import { getFetchMovieFromS3 } from "@/server/movies/getFetchMovieFromS3";
import { getMoviesBySlug } from "@/server/movies/getMoviesBySlug";

const MovieDetails = async ({ params }) => {
    const pageParams = await params;
    const { slug } = pageParams || {};
    let movieDetails = {};
    let movieVideo = {};
    if (slug) {
        movieDetails = await getMoviesBySlug(slug);
        movieVideo = await getFetchMovieFromS3({ type: "trailer", id: movieDetails?.data.id })
    }

    console.log("===============12", JSON.stringify(movieDetails, null, 2));
    console.log("djjjdjj======>",movieVideo);
    return (
        <section>
            <MovieBanner streamingUrl={movieVideo}/>
            <div className="container">
                <MovieDetailsSection movieDetails={movieDetails?.data || {}} />
            </div>
            <MovieScenes />
            <RecomendedMovie related_movies={movieDetails?.data?.related_movies || []} />
        </section>
    )
}

export default MovieDetails;