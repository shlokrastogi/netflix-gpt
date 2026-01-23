import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    giminiMovieResults: null,
    movieNames: null,
    movieResults: null,
  },

  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGeminiMovieResults: (state, actions) => {
      const { movieNames, movieResults } = actions.payload;
      state.giminiMovieResults = actions.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGeminiMovieResults } = gptSlice.actions;

export default gptSlice.reducer;
