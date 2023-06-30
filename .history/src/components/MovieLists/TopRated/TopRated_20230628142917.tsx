import { filmAPI } from "../../../store/services/FilmService";
import { MovieList } from "../../MovieList/MovieList";

export const TopRated = () => {
  const [getTrendingMovies] = filmAPI.useLazyGetTrendingMoviesQuery();
  const getMovies = async (page: number) => {
    await getTrendingMovies(page);
  };
  return (
    <>
      <MovieList getMoviesProps={} captionText={"Trending"} />
    </>
  );
};
