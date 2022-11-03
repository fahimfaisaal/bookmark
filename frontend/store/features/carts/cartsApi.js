import { apiSlice } from "../api/apiSlice";

export const cartsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCartsByUser: builder.query({
      query: ({ userId }) =>
        `/carts?populate=*&filters[userId][id][$eq]=${userId}`,
      providesTags: ["carts"],
    }),

    getCart: builder.query({
      query: ({ cartId }) => `/carts/${cartId}`,
      providesTags: (result, error, arg) => [{ type: "cart", id: arg }],
    }),
    getCartByUserBook: builder.query({
      query: ({ params }) => `/carts?${params}`,
      providesTags: (result, error, arg) => [
        { type: "cart", id: arg },
        "carts",
      ],
    }),
    addToCart: builder.mutation({
      query: ({ data }) => ({
        url: "/carts",
        method: "POST",
        body: { data },
      }),
      invalidatesTags: ["carts"],
    }),

    updateCart: builder.mutation({
      query: ({ cartId, data }) => {
        console.log({ api: cartId, data });
        return {
          url: `/carts/${cartId}`,
          method: "PUT",
          body: { data },
        };
      },
      invalidatesTags: (result, error, arg) => [
        { type: "cart", id: arg },
        "carts",
      ],
    }),
    deleteCart: builder.mutation({
      query: ({ cartId }) => ({
        url: `/carts/${cartId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["carts"],
    }),
  }),
});
export const {
  useGetCartsByUserQuery,
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
  useGetCartByUserBookQuery,
} = cartsApi;
