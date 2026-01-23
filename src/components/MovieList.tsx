import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }: { title: string; movies: any[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div className="pl-10 py-2 relative bg-transparent w-screen z-40 ">
      <h1 className=" text-white text-3xl py-2">{title}</h1>

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute text-xl left-3 top-1/2 z-10 bg-black/70 text-white px-3 py-2 rounded-full hover:bg-black"
      >
        ⇤
      </button>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute text-xl right-3 top-1/2 z-10 bg-black/70 text-white px-3 py-2 rounded-full hover:bg-black"
      >
        ⇥
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide scroll-smooth"
      >
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
