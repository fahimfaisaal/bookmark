import { apiSlice } from '../../api/apiSlice';

export const manufacturerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getManufacturer: builder.query({
      query: ({ query = 'populate=*' } = {}) => `/manufacturer?${query}`,
      providesTags: ['manufacturer']
    })
  })
});

export const { useGetManufacturerQuery } = manufacturerApi;
