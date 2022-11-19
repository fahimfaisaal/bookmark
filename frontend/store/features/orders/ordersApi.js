import getStripe from '../../../lib/getStripe';
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
      query: ({ data }) => {
        // console.log(data);
        return {
          url: '/orders',
          method: 'POST',
          body: { data }
        };
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          const stripe = await getStripe();
          stripe.redirectToCheckout({ sessionId: result.data.id });

          // dispatch(
          //   cartsApi.endpoints.updateCart.initiate({
          //     cartId: 1,
          //     data: {
          //       process: 'IN_ORDER'
          //     }
          //   })
          // );

          console.log({ result, arg });
        } catch (err) {
          // do nothing
        }
      },
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
