import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { MOVIE_BACKGROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen w-screen">
      <img
        className="absolute w-full h-full object-cover"
        src={MOVIE_BACKGROUND_IMAGE}
        alt="background"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black"></div>

      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
