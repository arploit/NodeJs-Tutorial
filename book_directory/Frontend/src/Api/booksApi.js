import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query";

export const booksAPI = createApi({
  reducerPath: "booksAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getAllTheBooks: builder.query({
      query: () => ({ url: "/" }),
    }),
  }),
});

export const { useGetAllTheBooks } = booksAPI;
