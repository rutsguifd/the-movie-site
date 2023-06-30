import { useReadLocalStorage } from "usehooks-ts";
import { MovieList } from "../../MovieList/MovieList";

export const Favorites = () => {
  const favoriteMovies = useReadLocalStorage("favorite-movies");
  return (
    <>
      <MovieList movies={favoriteMovies} captionText={"Trending Movies"} />
    </>
  );
};
