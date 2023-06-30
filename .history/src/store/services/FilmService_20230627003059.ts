import { api } from ".";
import { KeywordSearchResponse } from "../../utils/models";
import { ISearchResponse, SearchQuery } from "../responses/SearchResponse";

export const filmAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getMovieBySearch: build.query<KeywordSearchResponse, SearchQuery>({
      query: ({ searchQuery, page }) =>
        `search/keyword?query=${searchQuery}&page=${page}`,
    }),
    getTrendingMovies: build.query<ISearchResponse, void>({
      query: () => `trending/all/day?language=en-US`,
    }),
  }),
});
