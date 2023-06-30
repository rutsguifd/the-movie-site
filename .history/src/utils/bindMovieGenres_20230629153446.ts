import { Result } from "../store/responses/SearchResponse";
import { IGenresResponse } from "./models";

export const bindMovieGenres = (movie: Result, genres: IGenresResponse) => {
  genres?.genres.filter((genre) => movie?.genre_ids.includes(genre.id));
};
