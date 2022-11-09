/* eslint-disable operator-linebreak */
import { apiSlice } from '../api/apiSlice';

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({ query: () => '', providesTags: ['user'] }),
    getProfile: builder.query({
      query: () => '/users/me?populate[0]=avatar',
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
  })
});

export const { useGetProfileQuery, useGetUserQuery, useUpdateProfileMutation } =
  userApi;
