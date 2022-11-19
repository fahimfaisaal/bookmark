import getStripe from '../../../lib/getStripe';
import { apiSlice } from '../api/apiSlice';
import { cartsApi } from '../carts/cartsApi';

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: ({ usersId }) =>
        `/orders?filters[usersId]=${usersId}&populate=deep`,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          /**
           * when order completed / delivered, cart item will be deleted
           */
          result.data.map((item) => {
            if (item.attributes.status == 'DELIVERED') {
              item.attributes.cart.data.map((cartItem) =>
                dispatch(
                  cartsApi.endpoints.deleteCart.initiate({
                    cartId: cartItem.id
                  })
                )
              );
            }
          });

          // console.log({ result, arg });
        } catch (err) {
          // do nothing
        }
      },
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

      async onQueryStarted(arg, { queryFulfilled }) {
        console.log('order calling');
        try {
          const result = await queryFulfilled;
          /**
           * when order created, then navigate to stripe dashboard
           */
          const stripe = await getStripe();
          stripe.redirectToCheckout({ sessionId: result.data.id });
          console.log({ result, id: result.data.id });
        } catch (err) {
          // do nothing
          console.log('err=>', err);
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
