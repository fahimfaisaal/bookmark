import { apiSlice } from '../api/apiSlice';

export const publisherApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPublishers: builder.query({
      query: ({ query = 'populate=*' } = {}) => `/publishers?${query}`,
      providesTags: ['publishers']
    })
  })
});

export const { useGetPublishersQuery } = publisherApi;
