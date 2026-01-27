import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }: { posterPath: string }) => {
  if (!posterPath) return null;
  return (
    <div className="w-28 flex-shrink-0 transition-transform hover:scale-105 cursor-pointer">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="Movie Card"
        className="rounded-lg object-cover shadow-md"
      />
    </div>
  );
};

export default MovieCard;
