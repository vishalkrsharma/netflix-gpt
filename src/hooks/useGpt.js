import openai from "../utils/openai";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const useGpt = () => {
  const dispatch = useDispatch();

  const searchMovieTmdb = async (movie) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}`,
      TMDB_API_OPTIONS,
    );
    const json = await res.json();

    return json.results;
  };

  const handleGptSearch = async (searchText) => {
    const gptQuery = `Act as a Movie Recommendation System and suggest some movies for the query: ${searchText}. Only give me names of 5 movies, comma seperated like the Example given ahead. Example Result: Don, It, Up, Jawan, Sholay`;

    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      const gptMovies = gptResults.choices[0]?.message.content.split(", ");

      const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));

      const tmdbResults = await Promise.all(promiseArray);

      console.log(tmdbResults);

      dispatch(
        addGptMovieResult({ movieResults: tmdbResults, movieNames: gptMovies }),
      );
    } catch (err) {
      alert(err.message);
    }
  };

  return { searchMovieTmdb, handleGptSearch };
};

export default useGpt;
