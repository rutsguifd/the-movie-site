import { useLocalStorage } from "usehooks-ts";
import { IMovieDetails, Result } from "../store/responses/SearchResponse";
import { useEffect, useState } from "react";
import { filmAPI } from "../store/services/FilmService";

export const useFavorite = (movie: IMovieDetails | Result) => {
  const [favoriteMovie, setFavoriteMovie] = useLocalStorage<IMovieDetails[]>(
    "favorite-movies",
    []
  );

  const [getMovieDetails] = filmAPI.useLazyGetMovieDetailsQuery();

  const [isFavorite, setIsFavorite] = useState<boolean>();

  const favoriteClickHandler = async () => {
    if (!isFavorite) {
      const storageMovie = await getMovieDetails(
        movie?.id?.toString()
      ).unwrap();
      setFavoriteMovie((prev) => prev.concat(storageMovie));
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
