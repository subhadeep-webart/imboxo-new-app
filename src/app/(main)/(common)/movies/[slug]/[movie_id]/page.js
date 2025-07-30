export const dynamic = "force-dynamic";

import CommonBanner from "@/components/common/CommonBanner";
import MovieHeader from "@/components/movies/MovieHeader";
import MovieListContainer from "@/components/movies/MovieListContainer";
import { getMoviesByGenre } from "@/server/movies/getMoviesByGenre";

const MoviesByCategory = async ({ params }) => {
    const { slug,movie_id } = await params;
    const moviesData=await getMoviesByGenre({type:"genre",value:movie_id});

    return (
        <section>
            <CommonBanner backgroundImage={"/assets/images/Movie_listing.webp"} />
            <div className="container">
                <MovieHeader movieHeaderTextName={decodeURIComponent(slug)}/>
                <MovieListContainer allMovies={moviesData} />
            </div>
        </section>
    )
}

export default MoviesByCategory;