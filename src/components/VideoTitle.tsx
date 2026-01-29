import React from "react";

type VideoTitleProps = {
  title: string;
  overview: string;
};

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="absolute inset-0 z-10 bg-gradient-to-r from-black px-4 sm:px-12 pt-32 sm:pt-40">
      <h1 className="text-white text-2xl sm:text-5xl font-bold max-w-xl">
        {title}
      </h1>

      <p className="text-white text-xs sm:text-sm opacity-70 py-4 max-w-md hidden sm:block">
        {overview}
      </p>

      <div className="flex gap-3 mt-2">
        <button className="px-4 py-2 font-bold text-black bg-white rounded hover:bg-white/80 text-sm sm:text-base">
          ▶︎ Play
        </button>

        <button className="px-4 py-2 font-bold text-white bg-gray-600/60 hover:bg-gray-600/40 rounded text-sm sm:text-base">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
