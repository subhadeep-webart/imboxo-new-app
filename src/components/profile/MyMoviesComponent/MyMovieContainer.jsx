import MovieCard from "@/components/ui/card/MovieCard";
import styles from "./mymovies.module.scss";

const MyMovieContainer = ({ movieSectionHeader, movieLists }) => {
    return (
        <div>
            <div className={styles.section_padding}>
                <p className={styles.heading}>{movieSectionHeader}</p>
            </div>

            {movieLists && movieLists.length > 0 ? (
                <div className="grid grid-cols-4 gap-2">
                    {movieLists.map((movieData, index) => (
                        <MovieCard
                            movieData={movieData}
                            key={`${movieSectionHeader}-${index + 1}`}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center py-10 text-gray-400 text-lg min-h-[100px]">
                    <p className="text-white">🎬 No Movies Found</p>
                </div>
            )}
        </div>
    );
};

export default MyMovieContainer;
