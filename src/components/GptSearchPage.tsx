import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { MOVIE_BACKGROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={MOVIE_BACKGROUND_IMAGE}
        alt="background"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black"></div>

      {/* This wrapper fixes stacking issues */}
      <div className="relative mt-28 z-10">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
