import { apiSlice } from "../api/apiSlice";

export const cartsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCarts: builder.query({ query: () => `` }),
        getCart: builder.query({ query: () => `` }),
    })
})