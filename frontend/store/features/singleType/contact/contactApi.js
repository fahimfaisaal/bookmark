import { apiSlice } from '../../api/apiSlice';

export const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getContact: builder.query({
      query: ({ query = 'populate=*' } = {}) => `/contact?${query}`,
      providesTags: ['contact']
    })
  })
});

export const { useGetContactQuery } = contactApi;
