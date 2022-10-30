import { Box, Button, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import BookCard from '../../components/BookCard';
import Filter from '../../components/Filter';
import { useGetBooksQuery } from '../../store/features/books/booksApi';
import { FilterButtonContainer } from '../publishers/Style';

const Books = () => {
  const { data: bookLists } = useGetBooksQuery({
    params: "",
  });
 
  const [filterTrig, setFilterTrig] = useState(false);

  const handleFilter = () => {
    setFilterTrig(!filterTrig);
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
              disableElevation={true}
              onClick={handleFilter}
            >
              Filter
            </Button>
          </FilterButtonContainer>

          <Grid container spacing={3}>
          {bookLists?.data?.slice(0, 8).map((book) => (
            <Grid item  md={6} lg={filterTrig ? 4 : 3} xs={12}  key={book?.id}>
              <BookCard book={book?.attributes} bookId={book?.id}/>
            </Grid>
          ))}
           
          </Grid>
          <Stack direction={'row'} justifyContent={'center'} my={5}>
            <Button variant="contained" size="large" disableElevation={true}>
              Load More
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Books;
