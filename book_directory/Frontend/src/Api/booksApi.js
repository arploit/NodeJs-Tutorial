import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { transformDefaultResponse } from "./utils/apiHelper";

export const booksAPI = createApi({
  reducerPath: "booksAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getAllTheBooks: builder.query({
      query: () => ({ url: "/" }),
      transformResponse: (response) => transformDefaultResponse(response),
    }),
  }),
});

export const { useGetAllTheBooksQuery } = booksAPI;
