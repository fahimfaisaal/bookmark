import { apiSlice } from '../api/apiSlice';

export const favouritesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFavouriteBooks: builder.query({ query: () => '' })
  })
});

export const { useGetFavouriteBooksQuery } = favouritesApi;
