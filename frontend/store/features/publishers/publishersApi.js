import { apiSlice } from '../api/apiSlice';

export const publishersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPublishers: builder.query({
      query: () => `/publishers?populate=*`,
      providesTags: ['publishers']
    }),
    getPublisher: builder.query({
      query: (publisherId) => `/publishers/${publisherId}?populate=*`,
      providesTags: ['publisher']
    })
  })
});

export const { useGetPublisherQuery, useGetPublishersQuery } = publishersApi;
