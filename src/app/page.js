import Image from "next/image";
import { getMovies } from "@/server/movies/getMovies";
import { getMovieByCategory } from "@/server/movies/getMovieByCategory";
import TopMoviesOfWeek from "@/components/homepage/TopMoviesOfWeek";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import HomeBanner from "@/components/homepage/HomeBanner";
import LifeUfiction from "@/components/homepage/LifeUfiction";
import LatestUploadByCreator from "@/components/homepage/LatestUploadByCreator";
import CapturedSection from "@/components/homepage/CapturedSection";
import TrendingReels from "@/components/homepage/TrendingReels";
import HboMovie from "@/components/homepage/HboMovie";
import MovieViewerSection from "@/components/homepage/MovieViewerSection";
import Visionaries from "@/components/homepage/Visionaries";

const Home = async () => {
  const movies = await getMovies();

  console.log("Movies Api Data====================================>", movies);

  const movieByCategories = await getMovieByCategory();

  console.log("Movies By Category Data=================================>", movieByCategories);
  return (
    <>
      {/* Header Section */}
      <header className="header-section">
        <Header />
      </header>

      {/* Home Banner Section */}
      <HomeBanner />
      {/* Latest Upload by creator section */}
      <LatestUploadByCreator movieData={movieByCategories?.latest_releases?.slice(0, 3) || []} />
      {/* Captured Studio Setion */}
      <CapturedSection />
      {/* Trending Reels */}
      <TrendingReels />
      {/* Visionaries */}
      <Visionaries/>
      {/* Top Movies Of The Week Scetion */}
      <TopMoviesOfWeek topMoviesOfWeekData={movieByCategories?.top_pick_week ?? []} />
      {/* <section className="trending-reels-section">
        <div className="container">
          <div className="section-content">
            <div className="section-header">
              <h2 className="section-title">
                <strong>Trending</strong> Reels
              </h2>
              <button className="view-all">View All</button>
            </div>
            <div className="reels-wrapper">
              <div className="each-reel">
                <div className="reel-thumb">
                  <Image src="/assets/images/reel-7.png" alt="" fill />
                  <div className="play-backdrop">
                    <Image
                      src="/assets/icons/play-in-circle.svg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <h4 className="reel-title">Papillon</h4>
              </div>
              <div className="each-reel">
                <div className="reel-thumb">
                  <Image src="/assets/images/reel-3.png" alt="" fill />
                  <div className="play-backdrop">
                    <Image
                      src="/assets/icons/play-in-circle.svg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <h4 className="reel-title">Strenger Things</h4>
              </div>
              <div className="each-reel">
                <div className="reel-thumb">
                  <Image src="/assets/images/reel-8.png" alt="" fill />
                  <div className="play-backdrop">
                    <Image
                      src="/assets/icons/play-in-circle.svg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <h4 className="reel-title">The Abduction</h4>
              </div>
              <div className="each-reel">
                <div className="reel-thumb">
                  <Image src="/assets/images/reel-4.png" alt="" fill />
                  <div className="play-backdrop">
                    <Image
                      src="/assets/icons/play-in-circle.svg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <h4 className="reel-title">Joker</h4>
              </div>
              <div className="each-reel">
                <div className="reel-thumb">
                  <Image src="/assets/images/reel-9.png" alt="" fill />
                  <div className="play-backdrop">
                    <Image
                      src="/assets/icons/play-in-circle.svg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <h4 className="reel-title">Star War</h4>
              </div>
              <div className="each-reel">
                <div className="reel-thumb">
                  <Image src="/assets/images/reel-3.png" alt="" fill />
                  <div className="play-backdrop">
                    <Image
                      src="/assets/icons/play-in-circle.svg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <h4 className="reel-title">Strenger Things</h4>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <TrendingReels />
      {/* LifeUFiction section */}
      <LifeUfiction lifeUfictionData={movieByCategories?.genre?.LifeUfiction ?? []} />
      {/* Movie Banner */}
      <MovieViewerSection/>
      {/* HBO Movie */}
      <HboMovie />
      {/* Footer Scetion */}
      <Footer />
    </>
  );
}

export default Home
