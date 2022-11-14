import { apiSlice } from '../../api/apiSlice';

export const homeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHome: builder.query({
      query: ({ query = 'populate=*' } = {}) => `/home?${query}`,
      providesTags: ['home']
    })
  })
});

export const { useGetHomeQuery } = homeApi;
