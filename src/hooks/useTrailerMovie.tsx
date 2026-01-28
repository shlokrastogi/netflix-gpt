import React from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";

const useTrailerMovie = (movieId: number) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(
    (store: RootState) => store.movies.trailerVideo,
  );

  //fetch trailer video

  const getMainMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS,
    );
    const json = await data.json();
    // console.log(json);

    const trailers = json.results?.filter(
      (video: any) => video.type === "Trailer",
    );

    const trailer = trailers.length != 0 ? trailers[0] : json.results?.[0];

    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (!trailerVideo) getMainMovieVideo();
  }, [getMainMovieVideo]);
};

export default useTrailerMovie;
