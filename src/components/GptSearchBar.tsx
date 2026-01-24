import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../utils/appStore";
import geminiai from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constants";
import { addGeminiMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef<HTMLInputElement>(null);
  const langKey = useSelector((store: RootState) => store.config.lang);

  const searchMovieTMDB = async (movie: string) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        movie.trim(),
      )}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    try {
      const model = geminiai.getGenerativeModel({
        model: "gemini-3-flash-preview",
      });

      const prompt = `
Act as a movie recommendation system.
Suggest exactly 5 movies based on this query: ${searchText.current?.value}.
Return only comma separated movie names.
Example format: Inception, Interstellar, Oppenheimer, Sholay, Don
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const responseText = response.text();

      // Convert Gemini output to Array
      const movies = responseText.split(",");

      // TMDB search for each movie
      const promiseArray = movies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);

      // Send results to Redux
      dispatch(
        addGeminiMovieResults({
          movieNames: movies,
          movieResults: tmdbResults,
        }),
      );
    } catch (error) {
      console.error("Gemini Search Error:", error);
    }
  };

  return (
    <div className="absolute top-24 left-1/2 -translate-x-1/2 w-full px-2 mt-8 z-30  sm:w-1/2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGptSearchClick();
        }}
        className="flex"
      >
        <input
          ref={searchText}
          type="text"
          className="w-full p-2 bg-slate-800 text-white rounded-md mr-4"
          placeholder={lang[langKey as keyof typeof lang].gptSearchPlaceholder}
        />
        <button
          type="submit"
          className="bg-red-600 text-white font-semibold p-2 px-4 rounded-md hover:bg-red-700"
        >
          {lang[langKey as keyof typeof lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
