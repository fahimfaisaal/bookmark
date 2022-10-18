import { apiSlice } from "../api/apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOrders: builder.query({ query: () => `` }),
        getOrder: builder.query({ query: () => `` }),
    })
})