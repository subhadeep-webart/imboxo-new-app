import CommonBanner from "@/components/common/CommonBanner";
import MovieHeader from "@/components/movies/MovieHeader";
import MovieListContainer from "@/components/movies/MovieListContainer";
import { getMovies } from "@/server/movies/getMovies";

const Movies = async () => {
    const movies = await getMovies();
    return (
        <section>
            <CommonBanner backgroundImage={"/assets/images/Movie_listing.webp"} />
            <div className="container">
                <MovieHeader movieHeaderTextName={"Browse All Movies"} />
                <section className="mb-10">
                    <MovieListContainer allMovies={movies?.data || []} />
                </section>

            </div>
        </section>
    )
}

export default Movies;