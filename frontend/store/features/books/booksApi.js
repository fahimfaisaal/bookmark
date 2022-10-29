import { apiSlice } from "../api/apiSlice";

export const booksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ params }) => `/books?populate=*&${params}`,
      providesTags: ['books']
    }),
    getBook: builder.query({
      query: ({ bookId }) => `/books/${bookId}?populate=*`,
      providesTags: (result, error, arg) => [{ type: "book", id: arg }],
    }),

    getBooksByAuthor: builder.query({
      query: ({ authorName }) =>
        `/authors?populate[0]=avatar&populate[1]=books&filters[name][$eq]=${authorName} `,
        // ?populate[0]=avatar&populate[1]=books&filters[name][$eq]=Dr. Tim Upton III
    }),
    getBooksByPublisher: builder.query({
      query: ({ publisherName }) =>
        `/publishers?populate[0]=books&filters[name][$eq]=${publisherName} `,
    }),
  }),
});

export const {
  useGetBookQuery,
  useGetBooksByAuthorQuery,
  useGetBooksByPublisherQuery,
  useGetBooksQuery,
} = booksApi;
