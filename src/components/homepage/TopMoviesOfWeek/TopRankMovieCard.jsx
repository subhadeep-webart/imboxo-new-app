import Image from "next/image";
const TopRankMovieCard = ({movieDetails}) => {
    const {thumbnail,top_pick_week_position,name}=movieDetails;
    return (
        <li className="each-rank">
            <div className="rank-number">{Number(top_pick_week_position) + 1}</div>
            <div className="image-wrapper">
                <Image src={thumbnail} alt={`${name}-thumbnail`} fill className="rounded-2xl object-cover"/>
            </div>
        </li>
    )
}

export default TopRankMovieCard;