import { apiSlice } from '../api/apiSlice';

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: ({ query = 'populate=*' } = {}) => `/categories?${query}`,
      transformResponse: (res) =>
        res?.data?.map((category) => ({
          id: category.id,
          name: category.attributes.type,
          coverImage: category.coverImage
        })),
      providesTags: ['categories']
    })
  })
});

export const { useGetCategoriesQuery } = categoryApi;
