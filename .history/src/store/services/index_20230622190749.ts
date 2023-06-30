import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const BASE_URL = "https://api.themoviedb.org/3/";

export const api = createApi({
  reducerPath: "filmAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders(headers) {
      headers.set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDFjMTcyN2I3NWQ4YzBjMDBlZGQ5NmU2NDc4ZDBhMyIsInN1YiI6IjY0OTIwZDE0MmY4ZDA5MDExZDI1ZmQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TFk7R2yjc0wHQoUW_71ZjR-zgj0yjSVv1IfFuRcpi0Q"
      );
    },
  }),
  tagTypes: ["Film"],
  endpoints: (build) => ({}),
});
