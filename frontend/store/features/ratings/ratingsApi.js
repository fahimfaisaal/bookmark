import { apiSlice } from '../api/apiSlice';

export const ratingsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRatings: builder.query({ query: () => '', providesTags: ['ratings'] }),
    setRatings: builder.mutation({
      query: ({ ratingPoint }) => ({
        url: `/ratings/${ratingPoint}`,
        method: 'PUT'
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'ratings', id: arg }]
    })
  })
});

export const { useGetRatingsQuery } = ratingsApi;
