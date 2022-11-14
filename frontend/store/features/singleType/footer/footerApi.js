import { apiSlice } from '../../api/apiSlice';

export const footerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFooter: builder.query({
      query: ({ query = 'populate=deep' } = {}) => `/footer?${query}`,
      providesTags: ['footer']
    })
  })
});

export const { useGetFooterQuery } = footerApi;
