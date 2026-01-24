import { useRef, useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }: { title: string; movies: any[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showButtons, setShowButtons] = useState(false);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const checkOverflow = () => {
      setShowButtons(el.scrollWidth > el.clientWidth);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, [movies]);

  return (
    <div className="px-2 md:pl-4 py-2 relative bg-transparent w-screen z-30">
      <h1 className="text-white text-xl md:text-2xl py-2">{title}</h1>

      {/* Left Button */}
      {showButtons && (
        <button
          onClick={scrollLeft}
          className="absolute text-xl invisible md:visible md:left-3 top-1/2 -translate-y-1/2 z-20 bg-black/80 text-white px-3 py-2 rounded-full hover:bg-black"
        >
          ⇤
        </button>
      )}

      {/* Right Button */}
      {showButtons && (
        <button
          onClick={scrollRight}
          className="absolute text-xl invisible md:visible md:right-3 top-1/2 -translate-y-1/2 z-20 bg-black/80 text-white px-3 py-2 rounded-full hover:bg-black"
        >
          ⇥
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide scroll-smooth px-2 md:px-10"
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
