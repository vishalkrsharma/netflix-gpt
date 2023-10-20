import React from "react";
import { useSelector } from "react-redux";

import Movie from "./Movie";
import MovieInfo from "./MovieInfo";

const NowPlaying = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[Math.floor(Math.random() * 20)];

  return (
    <div className="relative">
      <Movie id={mainMovie.id} />
      <MovieInfo movie={mainMovie} />
    </div>
  );
};

export default NowPlaying;
