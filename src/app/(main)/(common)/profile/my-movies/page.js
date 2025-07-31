import { getMovieListByUserId } from "@/server/users/getMovieListByUserId";
import styles from "../profile.module.scss";
import MyMovieContainer from "@/components/profile/MyMoviesComponent/MyMovieContainer";
import SubscriptionSection from "@/components/profile/MyMoviesComponent/SubscriptionSection";
const MyMovies = async () => {
    const userMovieList = await getMovieListByUserId();
    const pay_per_view = userMovieList?.pay_per_view || [];
    const buy_movies = userMovieList?.buy || [];
    console.log("User  Movie List=====>", userMovieList);
    return (
        <section className="profile_page_container">
            <div className={styles.profile_page_wrapper}>
                <div className={styles.my_movie_contianer}>
                    <MyMovieContainer movieSectionHeader={"Purchased Movies"} movieLists={pay_per_view} />
                    <MyMovieContainer movieSectionHeader={"Rented Movies"} movieLists={buy_movies} />
                    <SubscriptionSection />
                </div>
            </div>
        </section>
    )
}

export default MyMovies;