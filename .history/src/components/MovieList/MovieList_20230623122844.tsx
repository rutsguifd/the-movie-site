import { filmAPI } from "../../store/services/FilmService";
import MovieCard from "../MovieCard";

export const MovieList = () => {
  const { data } = filmAPI.useGetTrendingMoviesQuery();
  console.log(data);
  return (
    <>
      {data?.results.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </>
  );
};
