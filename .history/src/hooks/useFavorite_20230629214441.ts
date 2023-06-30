import { useLocalStorage } from "usehooks-ts";
import { Result } from "../store/responses/SearchResponse";
import { useEffect, useState } from "react";
import { IMovieStorage } from "../utils/models";

export const useFavorite = (movie: IMovieStorage) => {
  const [favoriteMovie, setFavoriteMovie] = useLocalStorage<Result[]>(
    "favorite-movies",
    []
  );
  const [isFavorite, setIsFavorite] = useState<boolean>();
  const favoriteClickHandler = () => {
    if (!isFavorite) {
      setFavoriteMovie((prev) => prev.concat(movie));
    } else {
      setFavoriteMovie((prev) => prev.filter((mov) => mov.id !== movie.id));
    }
  };

  useEffect(() => {
    if (favoriteMovie.find((mov) => mov.id === movie.id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteMovie, movie.id]);
  return { isFavorite, favoriteClickHandler };
};
