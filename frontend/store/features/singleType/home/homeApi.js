import { apiSlice } from '../../api/apiSlice';

export const homeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHome: builder.query({
      query: ({ query = 'populate=deep' } = {}) => `/home?${query}`,
      providesTags: ['home']
    })
  })
});

export const { useGetHomeQuery } = homeApi;
