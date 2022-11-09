import { apiSlice } from '../api/apiSlice';

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: ({ userId }) => `/orders/${userId}`,
      providesTags: ['orders']
    }),
    getOrder: builder.query({
      query: ({ orderId }) => `/orders/${orderId}`,
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
