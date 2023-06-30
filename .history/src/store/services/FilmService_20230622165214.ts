import { api } from ".";
import { ISearchResponse, SearchQuery } from "../responses/SearchResponse";

export const filmAPI = api.injectEndpoints({
  endpoints: (build) => ({
    // getMessages: build.mutation<
    //   void,
    //   { messageDepartment: String; nextPageToken: String | null }
    // >({
    //   query: (options) => ({
    //     url: "api/messages",
    //     method: "POST",
    //     body: options,
    //   }),
    //   invalidatesTags: ["Film"],
    // }),
    // addGmailAccount: build.mutation<void, String>({
    //   query: (code) => ({
    //     url: "api/auth",
    //     method: "POST",
    //     body: { code },
    //   }),
    //   invalidatesTags: ["Film"],
    // }),

    getMovieBySearch: build.query<ISearchResponse, SearchQuery>({
      query: ({ searchQuery, page }) =>
        `search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${page}`,
    }),
    getTrendingMovies: build.query<ISearchResponse, void>({
      query: () => `trending/all/day?language=en-US`,
    }),
    getMoviePoster: build.query<ISearchResponse, { path: string }>({
      query: ({ path }) => path,
    }),
    // getMessage: build.query({
    //   query: () => "api/message",
    // }),
    // sendMessage: build.mutation<
    //   void,
    //   { sendTo: String; subject: String; body: String }
    // >({
    //   query: (message) => ({
    //     url: "api/send-message",
    //     method: "POST",
    //     body: message,
    //   }),
    //   invalidatesTags: ["Film"],
    // }),
    // saveDraft: build.mutation<
    //   void,
    //   { sendTo: String; subject: String; body: String }
    // >({
    //   query: (message) => ({
    //     url: "api/save-draft",
    //     method: "POST",
    //     body: message,
    //   }),
    //   invalidatesTags: ["Film"],
    // }),
  }),
});
