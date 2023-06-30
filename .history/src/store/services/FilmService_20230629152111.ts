import { api } from ".";
import { IGenresResponse, IKeywordSearchResponse } from "../../utils/models";
import {
  ISearchResponse,
  Result,
  SearchQuery,
} from "../responses/SearchResponse";

export const filmAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getMovieByKeyword: build.query<IKeywordSearchResponse, string>({
      query: (searchQuery) => `search/keyword?query=${searchQuery}&page=1`,
    }),
    getMovieBySearch: build.query<ISearchResponse, SearchQuery>({
      query: ({ searchQuery, page = 1 }) =>
        `search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${page}`,
    }),
    getTrendingMovies: build.query<ISearchResponse, number>({
      query: (page) => `trending/movie/day?language=en-US&page=${page}`,
    }),
    getGenresList: build.query<{ id: number, genres: string[] }[], Result[]>({
      query: (movieList) => `genre/movie/list?language=en`,
      transformResponse: (response: IGenresResponse, _, arg) => {
        const transformedArg = arg.map(obj => {
        const genreNames = response.genres
    .filter(genre => obj.genre_ids.includes(genre.id))
    .map(genre => genre.name);

  return { id: obj.id, genres: genreNames };

      },
    }),
  }),
});
