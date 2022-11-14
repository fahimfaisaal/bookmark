import { apiSlice } from '../../api/apiSlice';

export const navigationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNavigation: builder.query({
      query: ({ query = 'populate=*' } = {}) => `/navigation?${query}`,
      providesTags: ['navigation']
    })
  })
});

export const { useGetNavigationQuery } = navigationApi;
