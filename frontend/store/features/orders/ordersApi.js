import { apiSlice } from '../api/apiSlice';

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: ({ usersId }) =>
        `/orders?filters[usersId]=${usersId}&populate=deep`,
      providesTags: ['orders']
    }),
    getOrder: builder.query({
      query: ({ orderId }) => `/orders/${orderId}?populate=*`,
      providesTags: (result, error, arg) => [{ type: 'order', id: arg }]
    }),
    postOrder: builder.mutation({
      query: ({ data }) => ({
        url: '/orders',
        method: 'POST',
        body: { data }
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'order', id: arg },
        'orders'
      ]
    }),
    cancelOrder: builder.mutation({
      query: ({ orderId, data }) => ({
        url: `/orders/${orderId}`,
        method: 'DELETE',
        body: data
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'order', id: arg },
        'orders'
      ]
    })
  })
});

export const {
  useGetOrderQuery,
  useGetOrdersQuery,
  useCancelOrderMutation,
  usePostOrderMutation
} = ordersApi;
