/* eslint-disable operator-linebreak */
import { apiSlice } from '../api/apiSlice';

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({ query: () => '', providesTags: ['user'] }),
    getProfile: builder.query({
      query: () => '',
      providesTags: ['user']
    }),
    updateProfile: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'user', id: arg }]
    })
    // getAuthors: builder.query({
    //   query: () =>
    //     `/authors?populate[0]=avatar&pagination[page]=1&pagination[pageSize]=15`,
    // }),
    // getPublishers: builder.query({
    //     query: () =>
    //       `/publishers?populate[0]=logo&populate[1]=banner&pagination[page]=1&pagination[pageSize]=15`,
    //   }),
  })
});

export const { useGetProfileQuery, useGetUserQuery, useUpdateProfileMutation } =
  userApi;
