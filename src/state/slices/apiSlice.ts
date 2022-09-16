import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
  tagTypes: ["TestTag"],
  endpoints: (builder) => ({}),
});

export const {} = apiSlice;
