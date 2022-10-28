import { apiSlice } from "../api/apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: ({ userId }) => `/orders/${userId}`,
      providesTags: ["orders"],
    }),
    getOrder: builder.query({
      query: ({ orderId }) => `/orders/${orderId}`,
      providesTags: (result, error, arg) => [{ type: "order", id: arg }],
    }),
    cancelOrder: builder.mutation({
      query: ({ orderId }) => ({
        url: `/orders/${orderId}`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "order", id: arg },
        "orders",
      ],
    }),
  }),
});

export const { useGetOrderQuery, useGetOrdersQuery, useCancelOrderMutation } =
  ordersApi;