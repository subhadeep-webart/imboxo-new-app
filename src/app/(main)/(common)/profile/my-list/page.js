import styles from "../profile.module.scss";
import { getFavouritesMoviesByUserId } from "@/server/users/getFavouritesMoviesByUserId";
const MyList = async() => {
    const myMovieLists=await getFavouritesMoviesByUserId();

    console.log("My Movie Lists=======>123",myMovieLists)
    return (
        <section className="profile_page_container">
            <div className={styles.profile_page_wrapper}>
                <div className={styles.my_movie_contianer}>
                    {/* <MyMovieContainer movieSectionHeader={"Purchased Movies"} movieLists={pay_per_view} />
                    <MyMovieContainer movieSectionHeader={"Rented Movies"} movieLists={buy_movies} />
                    <SubscriptionSection /> */}
                </div>
            </div>
        </section>
    )
}

export default MyList