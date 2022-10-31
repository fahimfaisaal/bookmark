import { apiSlice } from "../api/apiSlice";
import qs from "qs";

export const booksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ query } = {}) => {
        console.log(query);
        return `/books?${qs.stringify(query, { encode: false })}`;
      },
      providesTags: ["books"],
    }),
    getBook: builder.query({
      query: ({ bookId }) => `/books/${bookId}?populate=*`,
      providesTags: (result, error, arg) => [{ type: "book", id: arg }],
    }),
    getBooksByAuthor: builder.query({
      query: ({ authorName }) =>
        `/authors?populate[0]=avatar&populate[1]=books&filters[name][$eq]=${authorName}`,
    }),
    getBooksByPublisher: builder.query({
      query: ({ publisherName }) =>
        `/publishers?populate[0]=books&filters[name][$eq]=${publisherName} `,
    }),
    getCategory: builder.query({
      query: () =>
        `/categories?populate[0]=coverImage&pagination[pageSize]=15 `,
    }),
  }),
});

export const {
  useGetBookQuery,
  useGetBooksByAuthorQuery,
  useGetBooksByPublisherQuery,
  useGetBooksQuery,
  useGetCategoryQuery,
} = booksApi;
