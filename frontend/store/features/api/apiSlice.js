import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLoggedOut } from '../auth/authSlice';

// NEXT_PUBLIC_API_URL=http://localhost:1337/api

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: async (headers, { getState, endpoint }) => {
    const token = getState()?.auth?.accessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    // headers.set("mode", "no-cors");
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
      api.dispatch(userLoggedOut());
      localStorage.clear();
    }
    return result;
  },
  tagTypes: [
    'books',
    'book',
    'carts',
    'cart',
    'orders',
    'order',
    'ratings',
    'tags',
    'user',
    'favourites',
    'authors',
    'author',
    'publishers',
    'publisher',
  ],
  keepUnusedDataFor: 3600,
  endpoints: (builder) => ({}),
});
