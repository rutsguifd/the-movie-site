import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { token } from "../../env";

const BASE_URL = "https://api.themoviedb.org/3/";

export const api = createApi({
  reducerPath: "filmAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders(headers) {
      headers.set("Authorization", token);
    },
  }),
  tagTypes: ["Film"],
  endpoints: () => ({}),
});
