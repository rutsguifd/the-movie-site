import { MovieList } from "../../MovieList/MovieList";
import { filmAPI } from "../../../store/services/FilmService";

export const Popular = () => {
  const [getPopularMovies] = filmAPI.useLazyGetPopularMoviesQuery();
  const getMovies = async (page: number) => {
    const res = await getPopularMovies(page).unwrap();
    return res;
  };
  return (
    <>
      <MovieList getMovies={getMovies} captionText={"Trending Movies"} />
    </>
  );
};
