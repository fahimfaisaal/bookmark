import { Box, Button, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import BookCard from '../../components/BookCard';
import Filter from '../../components/Filter';
import { FilterButtonContainer } from '../publishers/Style';

const Books = () => {
  const loopCount = [];
  for (let i = 0; i < 15; i++) {
    loopCount.push(i);
  }
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
            {loopCount.map((item) => (
              <Grid item lg={filterTrig ? 4 : 3} md={6} xs={12} key={item}>
                <BookCard />
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
