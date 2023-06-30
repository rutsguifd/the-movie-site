import { filmAPI } from "../../../store/services/FilmService";
import { MovieList } from "../../MovieList/MovieList";

export const Upcoming = () => {
  const [getUpcomingMovies] = filmAPI.useLazyGetUpcomingMoviesQuery();
  const getMovies = async (page: number) => {
    const res = await getUpcomingMovies(page).unwrap();
    return res;
  };
  return (
    <>
      <MovieList getMovies={getMovies} captionText={"Trending Movies"} />
    </>
  );
};
