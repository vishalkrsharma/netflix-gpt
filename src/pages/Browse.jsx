import React from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import {
  useNowPlayingMovies,
  usePopularMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from "../hooks/useMovies";
import NowPlaying from "../components/NowPlaying";
import MoviesContainer from "../components/MoviesContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <NowPlaying />
          <MoviesContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
