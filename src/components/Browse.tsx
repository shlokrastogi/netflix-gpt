import Header from "./header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      {/* 
        Main Container
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieLists * n
            - Cards * n
     */}

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
