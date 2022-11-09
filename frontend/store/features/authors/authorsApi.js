import { apiSlice } from '../api/apiSlice';

export const authorsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAuthors: builder.query({
      query: ({ query = 'populate=*' } = {}) => `/authors?${query}`,
      providesTags: ['authors']
    }),
    getAuthor: builder.query({
      query: (authorId) => `/authors/${authorId}/?populate=*`,
      providesTags: ['author']
    })
  })
});

export const { useGetAuthorQuery, useGetAuthorsQuery } = authorsApi;
