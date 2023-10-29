import React from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import NowPlaying from "../components/NowPlaying";
import MoviesContainer from "../components/MoviesContainer";
import GptSearch from "./GptSearch";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

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
