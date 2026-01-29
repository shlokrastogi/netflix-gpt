import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect, useCallback } from "react";
import { RootState } from "../utils/appStore";

const useTrailerMovie = (movieId: number) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(
    (store: RootState) => store.movies.trailerVideo,
  );

  const getMainMovieVideo = useCallback(async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );

    const json = await data.json();

    const trailers = json.results?.filter(
      (video: any) => video.type === "Trailer",
    );

    const trailer = trailers?.length !== 0 ? trailers?.[0] : json.results?.[0];

    dispatch(addTrailerVideo(trailer));
  }, [movieId, dispatch]);

  useEffect(() => {
    if (!trailerVideo) {
      getMainMovieVideo();
    }
  }, [trailerVideo, getMainMovieVideo]);
};

export default useTrailerMovie;
