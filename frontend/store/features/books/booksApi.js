import { apiSlice } from "../api/apiSlice";

export const booksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (params) => `/books?${params}`,
    }),
    getBook: builder.query({ query: () => `` }),
    
  }),
});

export const {} = booksApi;
