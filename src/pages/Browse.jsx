import React from "react";

import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import NowPlaying from "../components/NowPlaying";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <NowPlaying />
    </>
  );
};

export default Browse;
