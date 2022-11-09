import { apiSlice } from '../api/apiSlice';

export const publishersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPublishers: builder.query({
      query: ({ query = 'populate=*' } = {}) => `/publishers?${query}`,
      providesTags: ['publishers']
    }),
    getPublisher: builder.query({
      query: (publisherId) => `/publishers/${publisherId}?populate=*`,
      providesTags: ['publisher']
    })
  })
});

export const { useGetPublisherQuery, useGetPublishersQuery } = publishersApi;
