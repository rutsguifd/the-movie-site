import React from "react";
import { MovieList } from "../../MovieList/MovieList";
import { filmAPI } from "../../../store/services/FilmService";

export const Popular = () => {
  const [getTrendingMovies] = filmAPI.useLazyGetPopularMoviesQuery();
  const getMovies = async (page: number) => {
    const res = await getTrendingMovies(page).unwrap();
    return res;
  };
  return (
    <>
      <MovieList getMovies={getMovies} captionText={"Trending Movies"} />
    </>
  );
};
