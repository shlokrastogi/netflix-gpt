import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";

const SecondaryContainer = () => {
  const movies = useSelector((store: RootState) => store.movies);
  return (
    <div className="-mt-36 bg-black">
      {/* 
        Movie Lists - Popular
            MovieCards * n
        Movie Lists - Now Playing
        Movie Lists - Trending
        Movie Lists - Horror
    */}

      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies || []} />
      <MovieList title="Popular" movies={movies?.popularMovies || []} />
      <MovieList title="Upcoming" movies={movies?.upcomingMovies || []} />
      <MovieList title="Top Rated" movies={movies?.topRatedMovies || []} />
    </div>
  );
};

export default SecondaryContainer;
