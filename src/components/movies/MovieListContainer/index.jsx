import styles from "../movies.module.scss";
import MovieCard from "@/components/ui/card/MovieCard";
const MovieListContainer = ({ allMovies }) => {
    return (
        <section className={styles.movie_container}>
            <div className="grid grid-cols-4 gap-[30px]">
                {
                    allMovies.map((movieData) => (<MovieCard key={movieData?.id} movieData={movieData} />))
                }
            </div>
        </section>

    )
}

export default MovieListContainer;