import Image from "next/image";
const MovieCard = ({movieData}) => {
    console.log("Movie Data======================>lifeUi",movieData);
    const {name,duration,release_date,thumbnail}=movieData || {};
    return (
        <div className="each-movie">
            <div className="movie-image">
                <Image src={thumbnail} alt={`${name}-image`} fill className="rounded-2xl"/>
            </div>
            <div className="movie-info">
                <div className="movie-details">
                    <h3 className="movie-title">{name}</h3>
                    <div className="content-details">
                        <div className="rating">
                            <Image
                                src="/assets/icons/star-full.svg"
                                alt=""
                                width={16}
                                height={16}
                            />
                            <span>8.8</span>
                        </div>
                        <span className="year">{release_date}</span>
                        <span className="duration">{duration}</span>
                    </div>
                </div>
                <div className="movie-action">
                    <Image
                        src="/assets/icons/play-in-circle.svg"
                        alt=""
                        width={32}
                        height={32}
                    />
                </div>
            </div>
        </div>
    )
}

export default MovieCard;