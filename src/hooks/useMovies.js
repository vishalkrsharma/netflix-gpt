import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/moviesSlice";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      TMDB_API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
};

export const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      TMDB_API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
};

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      TMDB_API_OPTIONS,
    );

    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
};

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      TMDB_API_OPTIONS,
    );

    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
};
