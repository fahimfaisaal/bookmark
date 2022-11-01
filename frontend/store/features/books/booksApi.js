import { apiSlice } from '../api/apiSlice';

export const booksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ params }) => `/books?populate=*&${params}`,
      providesTags: ['books'],
    }),
    getBook: builder.query({
      query: (bookId) => {
        console.log({ bookId });
        return `/books/${bookId}?populate=*`;
      },
      providesTags: (result, error, arg) => [{ type: 'book', id: arg }],
    }),

    getNestedBookItem: builder.query({
      query: (params) => `books/${params}`,
      providesTags: ['nestedBook'],
    }),

    getBooksByAuthor: builder.query({
      query: ({ authorName }) =>
        `/authors?populate[0]=avatar&populate[1]=books&filters[name][$eq]=${authorName} `,
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
  useGetNestedBookItemQuery,
} = booksApi;
