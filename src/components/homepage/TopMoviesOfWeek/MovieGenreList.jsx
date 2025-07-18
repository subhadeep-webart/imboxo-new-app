import MovieCategoryTagBadge from "./MovieCategoryTagBadge";
const MovieGenreList = ({ genreList }) => {
    return (
        <ul className="tags-wrapper">
            {
                genreList.map((genre, index) => (
                    <MovieCategoryTagBadge categoryType={genre} key={`genre-${index + 1}`} />
                ))
            }
        </ul>
    )
}

export default MovieGenreList;