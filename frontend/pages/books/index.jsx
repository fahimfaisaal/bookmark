import { Box, Button, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Head from 'next/head';
import React from 'react';
import { FiFilter } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import BookCard from '../../components/BookCard';
import BookSkeleton from '../../components/BookSkeleton';
import Filter from '../../components/Filter';
import useBooksFilterQuery from '../../hooks/useBooksFilterQuery';

import { FilterButtonContainer } from '../../styles/publisherStyle';
import { fakeArr } from '../../utils';

function Books() {
  const {
    books,
    page,
    isLoading,
    filterTrig,
    pagination,
    paginationHandler,
    handleFilter
  } = useBooksFilterQuery();

  return (
    <Box>
      <Head>
        <title>Books</title>
        <meta
          name="description"
          content="You can see all books in your application from here"
        />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/2/2f/Icon-green-line-b-default.svg"
        />
      </Head>
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
            {isLoading
              ? fakeArr(8).map((item) => (
                  <Grid item md={6} lg={filterTrig ? 4 : 3} xs={12} key={item}>
                    <BookSkeleton />
                  </Grid>
                ))
              : books?.map((book) => (
                  <Grid
                    item
                    md={6}
                    lg={filterTrig ? 4 : 3}
                    xs={12}
                    key={book?.id}
                  >
                    <BookCard book={book?.attributes} bookId={book?.id} />
                  </Grid>
                ))}
          </Grid>
          <Stack direction="row" justifyContent="center" my={5}>
            {pagination?.pageCount > page && (
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
