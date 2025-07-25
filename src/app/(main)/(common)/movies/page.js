import AnimatedSection from "@/components/common/AnimatedSection";
import CommonBanner from "@/components/common/CommonBanner";
import MovieHeader from "@/components/movies/MovieHeader";
import MovieListContainer from "@/components/movies/MovieListContainer";
import { getMovies } from "@/server/movies/getMovies";

const Movies = async () => {
    const movies = await getMovies();

    return (
        <section>
            <AnimatedSection>
                <CommonBanner backgroundImage={"/assets/images/Movie_listing.webp"} />
            </AnimatedSection>
            <div className="container">
                {/* Fade-in movie header */}
                <AnimatedSection>
                     <MovieHeader movieHeaderTextName={"Browse All Movies"} />
                </AnimatedSection>

                {/* Fade-in movie list container */}
                <AnimatedSection>
                    <MovieListContainer allMovies={movies?.data || []} />
                </AnimatedSection>
                
            </div>
        </section>
    );
};

export default Movies;
