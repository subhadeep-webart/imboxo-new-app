import MovieCategoryTagBadge from "./MovieCategoryTagBadge";
const MovieGenreList = ({ genreList }) => {
    return (
        <ul className="tags-wrapper" >
            {
                genreList.map((genre, index) => (
                    <MovieCategoryTagBadge categoryType={genre} key={crypto.randomUUID()} index={index}/>
                ))
            }
        </ul>
    )
}

export default MovieGenreList;