import { Result } from "../store/responses/SearchResponse";

export const bindMovieGenres = (
  movie: Result,
  genres: { id: number; name: string }[]
) => {
  genres?.filter((genre) => movie?.genre_ids.includes(genre.id));
};
