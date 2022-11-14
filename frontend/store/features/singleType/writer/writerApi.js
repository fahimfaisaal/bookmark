import { apiSlice } from '../../api/apiSlice';

export const writerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWriter: builder.query({
      query: ({ query = 'populate=*' } = {}) => `/writer?${query}`,
      providesTags: ['writer']
    })
  })
});

export const { useGetWriterQuery } = writerApi;
