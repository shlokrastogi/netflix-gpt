import { useSelector } from "react-redux";
import useTrailerMovie from "../hooks/useTrailerMovie";

type mainMovieVideoProp = {
  movieId: number;
};

const VideoBackground = ({ movieId }: mainMovieVideoProp) => {
  useTrailerMovie(movieId);
  const trailerVideo = useSelector((store: any) => store.movies?.trailerVideo);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <iframe
        className="w-screen aspect-video translate-y-[-12%]"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
