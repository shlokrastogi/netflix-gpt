import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";

const GptSearchBar = () => {
  const langKey = useSelector((store: RootState) => store.config.lang);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="absolute top-24 left-1/2 -translate-x-1/2 w-1/2 flex"
    >
      <input
        type="text"
        className="w-full p-2 bg-slate-800 text-white rounded-md mr-2 "
        placeholder={lang[langKey as keyof typeof lang].gptSearchPlaceholder}
      />
      <button className="bg-red-600 text-white font-semibold p-2 px-4 rounded-md">
        {lang[langKey as keyof typeof lang].search}
      </button>
    </form>
  );
};

export default GptSearchBar;
