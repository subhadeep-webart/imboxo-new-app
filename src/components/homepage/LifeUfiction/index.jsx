import MovieCard from "@/components/ui/card/MovieCard";
const LifeUfiction = ({ lifeUfictionData }) => {
    return (
        <section className="trending-reels-section">
            <div className="container">
                <div className="section-content">
                    <div className="section-header">
                        <h2 className="section-title">
                            <strong>LifeUfiction</strong> Movie
                        </h2>
                        <button className="view-all">View All</button>
                    </div>
                </div>
                <div className="latest-movies-wrapper full_screen_caraousel">
                {
                    lifeUfictionData?.map((movie) => (<MovieCard movieData={movie} key={movie?.id} />))
                }
            </div>
            </div>
        </section>
    )
}

export default LifeUfiction;