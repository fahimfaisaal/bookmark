import qs from 'qs';
import { apiSlice } from '../api/apiSlice';

export const booksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ query } = {}) =>
        `/books?${qs.stringify(query, { encode: false })}`,
      providesTags: ['books']
    }),
    getBook: builder.query({
      query: (bookId) => `/books/${bookId}?populate=*`,
      providesTags: (result, error, arg) => [{ type: 'book', id: arg }]
    }),

    getNestedBookItem: builder.query({
      query: (params) => `books/${params}`,
      providesTags: ['nestedBook']
    }),
    getBooksByAuthor: builder.query({
      query: (authorName) =>
        `/books?populate=*&filters[authors][name][$eq]=${authorName}`,
      providesTags: ['books']
    }),
    getBooksByPublisher: builder.query({
      query: (publisherName) =>
        `/books?populate=*&filters[publisherId][name][$eq]=${publisherName}`,
      providesTags: ['books']
    }),
    getCategory: builder.query({
      query: () => '/categories?populate[0]=coverImage&pagination[pageSize]=15 '
    }),
    getBooksByTags: builder.query({
      query: (query) => `/books?populate=*${query}`,
      providesTags: ['books']
    })
  })
});

export const {
  useGetBookQuery,
  useGetBooksByAuthorQuery,
  useGetBooksByPublisherQuery,
  useGetBooksQuery,
  useGetCategoryQuery,
  useGetNestedBookItemQuery,
  useGetBooksByTagsQuery
} = booksApi;
