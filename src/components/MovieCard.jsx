import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const { title, poster_path } = movie;

  return (
    <div className="w-32">
      <img alt="MOVIE_POSTER" src={`${IMAGE_CDN_URL}${poster_path}`} />
    </div>
  );
};

export default MovieCard;
