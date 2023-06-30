import { useSearchParams } from "react-router-dom";
import { filmAPI } from "../../../store/services/FilmService";
import { MovieList } from "../../MovieList/MovieList";

export const SearchResults = () => {
  const { data: movieList } = filmAPI.useGetTrendingMoviesQuery();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  return (
    <>
      <MovieList movieList={movieList} captionText={"Trending"} />
    </>
  );
};
