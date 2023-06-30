import { useSearchParams } from "react-router-dom";
import { filmAPI } from "../../../store/services/FilmService";
import { MovieList } from "../../MovieList/MovieList";
import { useCallback, useEffect } from "react";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  console.log(title);

  const [getMoviesBySearch] = filmAPI.useLazyGetMovieBySearchQuery();
  const getMovies = useCallback(
    async (page: number) => {
      const res = await getMoviesBySearch({
        searchQuery: title || "",
        page,
      }).unwrap();
      return res;
    },
    [getMoviesBySearch, title]
  );

  useEffect(() => {
    getMovies(1);
  }, [title, getMovies]);

  return (
    <>
      <MovieList
        key={title}
        getMovies={getMovies}
        captionText={`Search Results for: ${title}`}
      />
    </>
  );
};
