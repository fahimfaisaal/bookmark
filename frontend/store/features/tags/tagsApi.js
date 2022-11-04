import { apiSlice } from "../api/apiSlice";

export const tagsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query({
      query: ({ query = "populate=*" } = {}) => `/tags?${query}`,
      providesTags: ["tags"],
      transformResponse: (res) =>
        res?.data?.map((tag) => ({
          id: tag.id,
          name: tag.attributes.type,
        })),
    }),
  }),
});

export const { useGetTagsQuery } = tagsApi;
