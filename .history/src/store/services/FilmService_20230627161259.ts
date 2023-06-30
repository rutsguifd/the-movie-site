import { api } from ".";
import { IKeywordSearchResponse } from "../../utils/models";
import { ISearchResponse, SearchQuery } from "../responses/SearchResponse";

export const filmAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getMovieByKeyword: build.query<IKeywordSearchResponse, SearchQuery>({
      query: ({ searchQuery }) => `search/keyword?query=${searchQuery}&page=1`,
    }),
    getMovieBySearch: build.query<ISearchResponse, SearchQuery>({
      query: ({ searchQuery, page }) =>
        `search/movie?query=q&include_adult=false&language=en-US&page=1`,
    }),
    getTrendingMovies: build.query<ISearchResponse, void>({
      query: () => `trending/all/day?language=en-US`,
    }),
  }),
});
