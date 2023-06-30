import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const BASE_URL = "http://localhost:3001/";

export const api = createApi({
  reducerPath: "filmAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Film"],
  endpoints: (build) => ({}),
});
