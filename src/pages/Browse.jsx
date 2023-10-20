import React from "react";

import Header from "../components/Header";
import {
  useNowPlayingMovies,
  usePopularMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from "../hooks/useMovies";
import NowPlaying from "../components/NowPlaying";
import MoviesContainer from "../components/MoviesContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <NowPlaying />
      <MoviesContainer />
    </div>
  );
};

export default Browse;
