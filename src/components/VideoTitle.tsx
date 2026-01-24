import React from "react";

type VideoTitleProps = {
  title: string;
  overview: string;
};

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="z-10 w-screen h-screen aspect-video absolute pt-40  px-4 bg-gradient-to-r from-black sm:px-12 sm:pt-28">
      <h1 className="text-white text-2xl font-bold">{title}</h1>
      <p className="text-white text-md opacity-75 py-4 w-full sm:w-1/3">
        {overview}
      </p>
      <div>
        <button className="p-1 mr-4 px-4 font-bold text-black bg-white rounded hover:bg-white/75">
          ▶︎ Play
        </button>
        <button className="p-1 px-4 text-white font-bold bg-gray-600/60 hover:bg-gray-600/40 rounded">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
