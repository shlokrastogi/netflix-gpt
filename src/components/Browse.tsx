import Header from "./header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
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
