import { useSearchParams } from "react-router-dom";
import { filmAPI } from "../../../store/services/FilmService";
import { MovieList } from "../../MovieList/MovieList";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const [getMoviesBySearch] = filmAPI.useLazyGetMovieBySearchQuery();
  const getMovies = async (page: number) => {
    const res = await getMoviesBySearch({
      searchQuery: title || "",
      page,
    }).unwrap();
    return res;
  };

  return (
    <>
      <MovieList getMovies={getMovies} captionText={"Search Results"} />
    </>
  );
};
