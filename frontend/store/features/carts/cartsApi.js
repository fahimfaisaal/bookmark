import { apiSlice } from "../api/apiSlice";

export const cartsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCartsByUser: builder.query({
      query: ({ userId }) => `/carts?populate=*&filters[userId][id][$eq]=${userId}`,
      providesTags: ["carts"],
    }),

    getCart: builder.query({
      query: ({ cartId }) => `/carts/${cartId}`,
      providesTags: (result, error, arg) => [{ type: "cart", id: arg }],
    }),
    addToCart: builder.mutation({
      query: ({ data }) => ({
        url: "/carts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['carts']
    }),

    updateCart: builder.mutation({
      query: ({ data, cartId }) => ({
        url: `/carts/${cartId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags:(result, error, arg) => [{ type: "cart", id: arg }]
    }),
    deleteCart: builder.mutation({
      query: ({ cartId }) => ({
        url: `/carts/${cartId}`,
        method: "DELETE",
      }),
      invalidatesTags: ['carts']
    }),
  }),
});
export const {
  useGetCartsByUserQuery,
  useGetCartQuery,
  useAddToCartMutaion,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = cartsApi;
