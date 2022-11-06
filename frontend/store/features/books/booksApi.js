import qs from 'qs';
import { BOOKMARK_AUTH } from '../../../constant';
import { apiSlice } from '../api/apiSlice';

export const booksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ query } = {}) =>
        `/books?${qs.stringify(query, { encode: false })}`,
      transformResponse: (response, meta, arg) => {
        const localAuth =
          JSON.parse(localStorage?.getItem(BOOKMARK_AUTH)) || {};
        const auth = localAuth?.user?.id;
        const responseModified = {
          ...response,
          data: response?.data?.map((item) => {
            const isFav = item?.attributes?.users?.data?.find(
              (author) => author?.id === auth
            );
            if (item?.attributes?.users?.data?.length > 0) {
              return {
                ...item,
                attributes: {
                  ...item.attributes,
                  isFavorite: !!isFav
                }
              };
            } else {
              return {
                ...item,
                attributes: {
                  ...item.attributes,
                  isFavorite: false
                }
              };
            }
          })
        };
        return responseModified;
      },
      providesTags: ['books']
    }),
    getBook: builder.query({
      query: (bookId) => `/books/${bookId}?populate=*`,
      providesTags: (result, error, arg) => [{ type: 'book', id: arg }],
      transformResponse: (response, meta, arg) => {
        const localAuth =
          JSON.parse(localStorage?.getItem(BOOKMARK_AUTH)) || {};
        const auth = localAuth?.user?.id;
        const isFav = response?.data?.attributes?.users?.data?.find(
          (author) => author?.id === auth
        );
        const responseModified = {
          ...response,
          data: {
            ...response.data,
            attributes: {
              ...response.data?.attributes,
              isFavorite: !!isFav
            }
          }
        };

        console.log({ response, arg, isFav });
        return responseModified;
      }
    }),

    getNestedBookItem: builder.query({
      query: (params) => `books/${params}`,
      providesTags: ['nestedBook']
    }),
    getBooksByAuthor: builder.query({
      query: ({ authorName }) =>
        `/authors?populate[0]=avatar&populate[1]=books&filters[name][$eq]=${authorName}`
    }),
    getBooksByPublisher: builder.query({
      query: (publisherName) =>
        `/books?populate=*&filters[publisherId][name][$eq]=${publisherName}`,
      providesTags: ['books']
    }),
    getCategory: builder.query({
      query: () => `/categories?populate[0]=coverImage&pagination[pageSize]=15 `
    }),
    getBooksByTags: builder.query({
      query: (query) => `/books?populate=*${query}`,
      providesTags: ['books']
    }),
    updateFavoriteBook: builder.mutation({
      query: ({ bookId, data }) => ({
        url: `/books/${bookId}`,
        method: 'PUT',
        body: { data }
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'book', id: arg },
        'books'
      ]
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
  useGetBooksByTagsQuery,
  useUpdateFavoriteBookMutation
} = booksApi;
