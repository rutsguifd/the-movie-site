import { filmAPI } from "../../../store/services/FilmService";
import { MovieList } from "../../MovieList/MovieList";

export const TopRated = () => {
  const [getTrendingMovies] = filmAPI.useLazyGetTrendingMoviesQuery();
  const getMovies = async (page: number) => {
    console.log("called from top rated");

    const res = await getTrendingMovies(page).unwrap();
    return res;
  };
  return (
    <>
      <MovieList getMovies={getMovies} captionText={"Trending"} />
    </>
  );
};
