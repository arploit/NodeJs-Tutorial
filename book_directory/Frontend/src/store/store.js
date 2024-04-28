import { configureStore } from "@reduxjs/toolkit";
import { booksAPI } from "../Api/booksApi";

export const store = configureStore({
  reducer: {
    [booksAPI.reducerPath]: booksAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksAPI.middleware),
});
