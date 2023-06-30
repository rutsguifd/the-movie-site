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
    getGenresList: build.query<{ genres: string[] }[], Result[]>({
      query: (movieList) => `genre/movie/list?language=en`,
      transformResponse: (response: IGenresResponse, _, arg) => {
        return arg.map((obj) => ({
          genres: response.genres
            .filter((genre) => obj?.genre_ids.includes(genre.id))
            .map((genre) => genre.name),
        }));
      },
    }),
  }),
});
