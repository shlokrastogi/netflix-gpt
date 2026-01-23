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
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${trailerVideo?.key}`}
        title="Trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
