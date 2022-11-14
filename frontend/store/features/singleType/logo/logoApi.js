import { apiSlice } from '../../api/apiSlice';

export const logoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLogo: builder.query({
      query: ({ query = 'populate=*' } = {}) => `/logo?${query}`,
      providesTags: ['logo']
    })
  })
});

export const { useGetLogoQuery } = logoApi;
