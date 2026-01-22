import React from "react";

type VideoTitleProps = {
  title: string;
  overview: string;
};

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="z-10 w-screen h-screen aspect-video absolute pt-40 px-12 bg-gradient-to-r from-black">
      <h1 className="text-white text-4xl font-bold">{title}</h1>
      <p className="text-white text-lg py-4 w-1/3">{overview}</p>
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
