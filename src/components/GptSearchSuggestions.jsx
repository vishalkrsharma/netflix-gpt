import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="m-4 bg-black p-4">
      {movieNames.map((movieName, idx) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[idx]}
        />
      ))}
    </div>
  );
};

export default GptSearchSuggestions;
