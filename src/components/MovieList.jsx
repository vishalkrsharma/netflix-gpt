import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <>
      <div className="mx-16 mb-10 text-3xl font-semibold">{title}</div>
      <div className="mx-16 flex overflow-x-scroll">
        <div className=" flex gap-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
