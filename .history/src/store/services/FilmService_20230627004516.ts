import { api } from ".";
import { IKeywordSearchResponse } from "../../utils/models";
import { ISearchResponse, SearchQuery } from "../responses/SearchResponse";

export const filmAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getMovieBySearch: build.query<IKeywordSearchResponse, SearchQuery>({
      query: ({ searchQuery, page }) =>
        `search/keyword?query=${searchQuery}&page=${page}`,
    }),
    getTrendingMovies: build.query<ISearchResponse, void>({
      query: () => `trending/all/day?language=en-US`,
    }),
  }),
});
