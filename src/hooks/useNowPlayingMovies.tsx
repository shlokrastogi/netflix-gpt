import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect, useCallback } from "react";
import { RootState } from "../utils/appStore";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store: RootState) => store.movies.nowPlayingMovies,
  );

  const getNowPlayingMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS,
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    if (!nowPlayingMovies) {
      getNowPlayingMovies();
    }
  }, [nowPlayingMovies, getNowPlayingMovies]);
};

export default useNowPlayingMovies;
