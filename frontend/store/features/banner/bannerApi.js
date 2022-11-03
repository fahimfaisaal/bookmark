import { apiSlice } from '../api/apiSlice';

export const bannerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBanners: builder.query({
      query: () => `/banner?populate=*`,
      providesTags: ['banner'],
    }),
  }),
});

export const { useGetBannersQuery } = bannerApi;
