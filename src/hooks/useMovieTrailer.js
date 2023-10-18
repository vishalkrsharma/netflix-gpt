import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieTeaser();
  }, []);

  const getMovieTeaser = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      TMDB_API_OPTIONS,
    );

    const json = await res.json();

    const filteredTrailers = json.results.filter(
      (movie) => movie.type === "Trailer",
    );

    const trailer = filteredTrailers.length
      ? filteredTrailers[0]
      : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
