import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const Movie = ({ id }) => {
  useMovieTrailer(id);

  const trailer = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="-z-10 min-h-screen">
      <iframe
        className="min-h-screen w-screen"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&loop=1&mute=1&controls=0`}
      ></iframe>
    </div>
  );
};

export default Movie;
