import { filmAPI } from "../../../store/services/FilmService";
import { MovieList } from "../../MovieList/MovieList";

export const TopRated = () => {
  const { data: movieList } = filmAPI.useGetTrendingMoviesQuery();
  console.log(movieList);
  return (
    <div>
      <MovieList movieList={movieList} />
    </div>
  );
};
