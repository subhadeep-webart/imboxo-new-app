import TopRankMovieCard from "./TopRankMovieCard";

const TopRankMovieList = ({movieListData}) => {
    return (
        <ul className="top-rank-wrapper">
            {
                movieListData.map((movieData,index)=>(<TopRankMovieCard movieDetails={movieData} key={`top-rank-movie-${index+1}`}/>))
            }
        </ul>
    )
}

export default TopRankMovieList;