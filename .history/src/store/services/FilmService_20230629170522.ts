import { api } from ".";
import { IGenresResponse, IKeywordSearchResponse } from "../../utils/models";
import { ISearchResponse, SearchQuery } from "../responses/SearchResponse";

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
    getGenresList: build.query<IGenresResponse, void>({
      query: () => `genre/movie/list?language=en`,
    }),
    getRecommendations: build.query<
      ISearchResponse,
      { id: number; page: number }
    >({
      query: ({ id, page }) =>
        `movie/${id}/recommendations?language=en-US&page=${page}`,
    }),
  }),
});
