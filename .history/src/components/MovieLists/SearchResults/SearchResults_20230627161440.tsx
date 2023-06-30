import { useSearchParams } from "react-router-dom";
import { filmAPI } from "../../../store/services/FilmService";
import { MovieList } from "../../MovieList/MovieList";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const { data: movieList } = filmAPI.useGetMovieBySearchQuery({
    searchQuery: title || "",
    page: 1,
  });
  console.log(movieList);

  return (
    <>
      <MovieList movieList={movieList} captionText={"Trending"} />
    </>
  );
};
