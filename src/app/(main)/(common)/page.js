export const dynamic = "force-dynamic";

import { getMovies } from "@/server/movies/getMovies";
import { getMovieByCategory } from "@/server/movies/getMovieByCategory";
import TopMoviesOfWeek from "@/components/homepage/TopMoviesOfWeek";
import HomeBanner from "@/components/homepage/HomeBanner";
import LifeUfiction from "@/components/homepage/LifeUfiction";
import LatestUploadByCreator from "@/components/homepage/LatestUploadByCreator";
import CapturedSection from "@/components/homepage/CapturedSection";
import TrendingReels from "@/components/homepage/TrendingReels";
import HboMovie from "@/components/homepage/HboMovie";
import MovieViewerSection from "@/components/homepage/MovieViewerSection";
import Visionaries from "@/components/homepage/Visionaries";
import EachMovieSection from "@/components/homepage/EachMovieSection";
import AnimatedSection from "@/components/common/AnimatedSection";

const Home = async () => {
  const movieByCategories = await getMovieByCategory();

  const festivalMovies = movieByCategories?.festival ?? {};
  const genres = movieByCategories?.genre ?? {};
  const payPerView = movieByCategories?.payPerView ?? [];

  return (
    <>
      <HomeBanner />
      {/* Latest Upload by creator section */}
      <LatestUploadByCreator movieData={movieByCategories?.latest_releases || []} />
      {/* Captured Studio Setion */}
      <CapturedSection />
      {/* Trending Reels */}
      <TrendingReels />
      {/* Visionaries */}
      <Visionaries />
      {/* Top Movies Of The Week Scetion */}
      <TopMoviesOfWeek topMoviesOfWeekData={movieByCategories?.top_pick_week ?? []} />
      {
        payPerView.length > 0 && <EachMovieSection movieCategoryName={"Pay Per View"} movieListData={payPerView} />
      }
      {
        Object.keys(festivalMovies).length > 0 && Object.keys(festivalMovies).map((movieCategory, index) => (<EachMovieSection movieCategoryName={movieCategory} movieListData={festivalMovies[movieCategory]} key={`festival-category-${index + 1}`} />))
      }
      {/* Movie Banner */}
      <MovieViewerSection />
      {
        Object.keys(genres).length > 0 && Object.keys(genres).map((movieCategory, index) => (<EachMovieSection movieCategoryName={movieCategory} movieListData={genres[movieCategory]} key={`genre-category-${index + 1}`} />))
      }
    </>
  );
}

export default Home
