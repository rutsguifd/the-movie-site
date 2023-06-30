import { api } from ".";
import { ISearchResponse, SearchQuery } from "../responses/SearchResponse";

export const filmAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getMovieBySearch: build.query<ISearchResponse, SearchQuery>({
      query: ({ searchQuery, page }) =>
        `search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${page}`,
    }),
    getTrendingMovies: build.query<ISearchResponse, void>({
      query: () => `trending/all/day?language=en-US`,
    }),
  }),
});
