import { Box, Button, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import BookCard from '../../components/BookCard';
import Filter from '../../components/Filter';
import { useGetBooksQuery } from '../../store/features/books/booksApi';
import {
  getAvailabilities,
  getCategories,
  getPriceRange,
  getPublishers,
  getRatingRange,
  getSearchText,
  getTags,
  setFilterFromQuery
} from '../../store/features/filter/filterSlice';
import { FilterButtonContainer } from '../publishers/Style';

const generateQuery = ({
  tags,
  categories,
  priceRange = [],
  ratingRange = [],
  publishers,
  searchText,
  availabilities,
  page
}) => ({
  populate: '*',
  pagination: {
    page
  },
  filters: {
    name: {
      $containsi: searchText
    },
    rating: {
      $gte: ratingRange.at(0),
      $lte: ratingRange.at(1)
    },
    variants: {
      price: {
        $gte: priceRange.at(0),
        $lte: priceRange.at(1)
      }
    },
    tags: {
      id: {
        $in: tags
      }
    },
    categories: {
      id: {
        $in: categories
      }
    },
    publisherId: {
      id: {
        $in: publishers
      }
    },
    status: {
      $in: availabilities
    }
  }
});

function Books() {
  const dispatch = useDispatch();
  const tags = useSelector(getTags);
  const categories = useSelector(getCategories);
  const publishers = useSelector(getPublishers);
  const priceRange = useSelector(getPriceRange);
  const ratingRange = useSelector(getRatingRange);
  const searchText = useSelector(getSearchText);
  const availabilities = useSelector(getAvailabilities);

  console.log({ priceRange, ratingRange });
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);
  const [filterTrig, setFilterTrig] = useState(false);
  const { data: bookLists, isSuccess } = useGetBooksQuery({
    query: generateQuery({
      page,
      tags,
      categories,
      publishers,
      priceRange,
      ratingRange,
      searchText,
      availabilities
    })
  });

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.toString().length) {
      setFilterTrig(true);
      dispatch(setFilterFromQuery(Object.fromEntries(query)));
    }
  }, []);

  useLayoutEffect(() => {
    if (isSuccess) {
      setBooks(() => [].concat(bookLists?.data ?? []));
      console.log({ effect: bookLists?.data, meta: bookLists?.meta });
    }
  }, [bookLists?.data]);

  const paginationHandler = () => setPage(page + 1);

  const handleFilter = () => {
    setFilterTrig((prev) => !prev);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {filterTrig && (
          <Grid item lg={3.5}>
            <Filter />
          </Grid>
        )}
        <Grid item lg={filterTrig ? 8.5 : 12}>
          <Typography variant="h1" mb={2}>
            Books
          </Typography>
          <FilterButtonContainer>
            <Button
              variant="outlined"
              startIcon={filterTrig ? <MdClose /> : <FiFilter />}
              disableElevation
              onClick={handleFilter}
            >
              Filter
            </Button>
          </FilterButtonContainer>

          <Grid container spacing={3}>
            {books?.map((book) => (
              <Grid item md={6} lg={filterTrig ? 4 : 3} xs={12} key={book?.id}>
                <BookCard book={book?.attributes} bookId={book?.id} />
              </Grid>
            ))}
          </Grid>
          <Stack direction="row" justifyContent="center" my={5}>
            {bookLists?.meta?.pageCount > page && (
              <Button
                variant="contained"
                size="large"
                disableElevation
                onClick={paginationHandler}
              >
                Load More
              </Button>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Books;
