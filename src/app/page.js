import Image from "next/image";
import { getMovies } from "@/server/homepage/movies/getMovies";
import { getMovieByCategory } from "@/server/homepage/movies/getMovieByCategory";
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
      <section className="visionaries-section">
        <div className="container">
          <div className="section-content">
            <div className="section-header">
              <h2 className="section-title">
                <strong>The Visionaries</strong> Behind the Film
              </h2>
              <div className="slider-action">
                <button className="slider-arrow">
                  <Image
                    src="assets/icons/slider-arrow-left.svg"
                    alt=""
                    width={17}
                    height={15}
                  />
                </button>
                <button className="slider-arrow">
                  <Image
                    src="assets/icons/slider-arrow-right.svg"
                    alt=""
                    width={17}
                    height={15}
                  />
                </button>
              </div>
            </div>
            <div className="visionaries-wrapper">
              <div className="each-visionary">
                <div className="visionary-thumb">
                  <Image src="/assets/images/visionary-1.png" alt="" fill />
                </div>
                <h4 className="visionary-name">Jordon Sharma</h4>
                <a className="visionary-role">Follow</a>
              </div>
              <div className="each-visionary">
                <div className="visionary-thumb">
                  <Image src="/assets/images/visionary-2.png" alt="" fill />
                </div>
                <h4 className="visionary-name">Jordon Sharma</h4>
                <a className="visionary-role">Follow</a>
              </div>
              <div className="each-visionary visionary-bigger">
                <div className="visionary-thumb-bigger">
                  <Image src="/assets/images/visionary-3.png" alt="" fill />
                </div>
                <div className="visionary-info">
                  <h4 className="visionary-name">Jordon Sharma</h4>
                  <a className="visionary-role">Follow</a>
                </div>
                <p className="visionary-description">
                  Worem ipsum dolor sit amet, consectet adipiscing elit.
                </p>
                <div className="visionary-socials">
                  <a className="social-link">
                    <Image
                      src="/assets/icons/twitter.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </a>
                  <a className="social-link">
                    <Image
                      src="/assets/icons/facebook.svg"
                      alt=""
                      width={16}
                      height={20}
                    />
                  </a>
                  <a className="social-link">
                    <Image
                      src="/assets/icons/instagram.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </a>
                  <div className="rating">
                    <Image
                      src="/assets/icons/star-full.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <span>8.8</span>
                  </div>
                </div>
              </div>
              <div className="each-visionary">
                <div className="visionary-thumb">
                  <Image src="/assets/images/visionary-1.png" alt="" fill />
                </div>
                <h4 className="visionary-name">Jordon Sharma</h4>
                <a className="visionary-role">Follow</a>
              </div>
              <div className="each-visionary">
                <div className="visionary-thumb">
                  <Image src="/assets/images/visionary-1.png" alt="" fill />
                </div>
                <h4 className="visionary-name">Jordon Sharma</h4>
                <a className="visionary-role">Follow</a>
              </div>
            </div>
          </div>
        </div>
      </section>
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
