import MovieCard from "@/components/ui/card/MovieCard";
const MovieListContainer = ({allMovies}) => {
    return (
        <section className="grid grid-cols-4 gap-[27px]">
            {
                allMovies.map((movieData)=>(<MovieCard key={movieData?.id} movieData={movieData}/>))
            }
        </section>
    )
}

export default MovieListContainer;