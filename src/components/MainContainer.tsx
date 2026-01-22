import React from "react";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store: any) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[0];
  //   console.log(mainMovie);

  const { original_title, overview } = mainMovie;
  return (
    <div>
      {/* 
        Video Title
        Video Background
    */}
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={1306368} />
    </div>
  );
};

export default MainContainer;
