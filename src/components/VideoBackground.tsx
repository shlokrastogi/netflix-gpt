import { useSelector } from "react-redux";
import useTrailerMovie from "../hooks/useTrailerMovie";

type mainMovieVideoProp = {
  movieId: number;
};

const VideoBackground = ({ movieId }: mainMovieVideoProp) => {
  useTrailerMovie(movieId);
  const trailerVideo = useSelector((store: any) => store.movies?.trailerVideo);

  return (
    <div className="w-screen h-screen overflow-hidden bg-black">
      <iframe
        className="w-[200%] translate-y-16 -translate-x-36 aspect-[2] sm:-translate-x-0 sm:w-screen sm:translate-y-[-12%] sm:aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${trailerVideo?.key}`}
        title="Trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
