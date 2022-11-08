import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetBooksQuery } from '../store/features/books/booksApi';
import {
  clearFilter,
  getAvailabilities,
  getCategories,
  getPriceRange,
  getRatingRange,
  getSearchText,
  getTags,
  setFilterFromQuery
} from '../store/features/filter/filterSlice';
import { generateQuery } from '../utils';

const useBooksFilterQuery = ({ authors, publisherId } = {}) => {
  const dispatch = useDispatch();
  const tags = useSelector(getTags);
  const categories = useSelector(getCategories);
  const priceRange = useSelector(getPriceRange);
  const ratingRange = useSelector(getRatingRange);
  const searchText = useSelector(getSearchText) || undefined;
  const availabilities = useSelector(getAvailabilities);
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);
  const [filterTrig, setFilterTrig] = useState(false);
  const { data: bookLists, isLoading } = useGetBooksQuery({
    query: generateQuery({
      page,
      tags,
      categories,
      priceRange,
      ratingRange,
      searchText,
      availabilities,
      authors,
      publisherId
    })
  });

  useEffect(() => {
    if (bookLists?.meta?.pagination?.pageCount > 1) {
      setBooks((prev) => prev.concat(bookLists?.data ?? []));
    } else {
      setBooks(() => [].concat(bookLists?.data ?? []));
      setPage(1);
    }
  }, [bookLists?.data]);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.toString().length) {
      setFilterTrig(true);
      dispatch(setFilterFromQuery(Object.fromEntries(query)));
    } else {
      dispatch(clearFilter());
    }
  }, []);

  const paginationHandler = () => setPage((prevPage) => prevPage + 1);

  const handleFilter = () => {
    setFilterTrig((prev) => !prev);
  };

  return {
    books,
    page,
    isLoading,
    filterTrig,
    pagination: bookLists?.meta?.pagination,
    paginationHandler,
    handleFilter
  };
};

export default useBooksFilterQuery;
