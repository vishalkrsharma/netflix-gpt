import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const MovieInfo = ({ movie }) => {
  const { title, overview } = movie;

  return (
    <div className="absolute top-0 flex min-h-screen w-screen flex-col items-start justify-center gap-4 bg-gradient-to-r from-black px-20 text-white">
      <div className="mt-16 text-4xl font-semibold">{title}</div>
      <p className="w-1/2 text-xl">
        {overview.length > 200 ? overview.substr(0, 300) + "..." : overview}
      </p>
      <div className="mt-4 flex flex-row gap-2">
        <button className="flex items-center justify-center gap-2 rounded-md bg-white bg-opacity-70 px-7 py-3 text-lg font-medium text-black transition-all hover:bg-opacity-90">
          <FaPlay /> Play
        </button>
        <button className="flex items-center justify-center gap-2 rounded-md bg-gray-500 bg-opacity-20 px-7 py-3 text-lg font-medium text-white transition-all hover:bg-opacity-50">
          <FaInfoCircle />
          More Info
        </button>
      </div>
    </div>
  );
};

export default MovieInfo;
