import { apiSlice } from "../api/apiSlice";

export const tagsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTags: builder.query({ query: () => `` }),
    })
})