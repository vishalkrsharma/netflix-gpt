import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MoviesContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className=" bg-black text-white">
        <div className="relative z-10 -mt-44 bg-gradient-to-t from-black">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
          <MovieList title="Popular Movies" movies={movies.popularMovies} />
          <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default MoviesContainer;
