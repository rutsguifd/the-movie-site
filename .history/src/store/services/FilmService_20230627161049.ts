import { api } from ".";
import { IKeywordSearchResponse } from "../../utils/models";
import { ISearchResponse, SearchQuery } from "../responses/SearchResponse";

export const filmAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getMovieByKeyword: build.query<IKeywordSearchResponse, SearchQuery>({
      query: ({ searchQuery, page }) =>
        `search/keyword?query=${searchQuery}&page=${page}`,
    }),
    getMovieBySearch: build.query<ISearchResponse, SearchQuery>({
      query: ({ searchQuery, page }) =>
        `search/keyword?query=${searchQuery}&page=${page}`,
    }),
    getTrendingMovies: build.query<ISearchResponse, void>({
      query: () => `trending/all/day?language=en-US`,
    }),
  }),
});
