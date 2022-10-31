import { Box, Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import BookCard from "../../components/BookCard";
import Filter from "../../components/Filter";
import { useGetBooksQuery } from "../../store/features/books/booksApi";
import {
  getCategories,
  getPriceRange,
  getSearchText,
  getTags,
} from "../../store/features/filter/filterSlice";
import { FilterButtonContainer } from "../publishers/Style";

const generateQuery = ({
  tags,
  categories,
  priceRange: [min, max] = [],
  searchText,
}) => ({
  populate: "*",
  filters: {
    name: {
      $containsi: searchText,
    },
    variants: {
      price: {
        $gte: min,
        $lte: max,
      },
    },
    tags: {
      type: {
        $in: tags,
      },
    },
    categories: {
      type: {
        $in: categories,
      },
    },
  },
});

const Books = () => {
  const tags = useSelector(getTags);
  const categories = useSelector(getCategories);
  const priceRange = useSelector(getPriceRange);
  const searchText = useSelector(getSearchText);
  const { data: bookLists } = useGetBooksQuery({
    query: generateQuery({
      tags,
      categories,
      priceRange,
      searchText,
    }),
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
            {bookLists?.data?.map((book) => (
              <Grid item md={6} lg={filterTrig ? 4 : 3} xs={12} key={book?.id}>
                <BookCard book={book?.attributes} bookId={book?.id} />
              </Grid>
            ))}
          </Grid>
          <Stack direction={"row"} justifyContent={"center"} my={5}>
            {bookLists?.data?.length === 25 && (
              <Button variant="contained" size="large" disableElevation={true}>
                Load More
              </Button>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Books;
