import { useReadLocalStorage } from "usehooks-ts";
import { MovieList } from "../../MovieList/MovieList";
import { IMovieStorage } from "../../../utils/models";

export const Favorites = () => {
  const favoriteMovies =
    useReadLocalStorage<IMovieStorage[]>("favorite-movies");
  return (
    <>
      <MovieList
        movies={favoriteMovies || []}
        captionText={"Trending Movies"}
      />
    </>
  );
};
