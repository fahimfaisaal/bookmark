import { Box, Button, Grid, Skeleton } from '@mui/material';
import { Stack } from '@mui/system';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import BookCard from '../../components/BookCard';
import BookSkeleton from '../../components/BookSkeleton';
import Filter from '../../components/Filter';
import PublicationCover from '../../components/PublicationCover';
import { useGetBooksByPublisherQuery } from '../../store/features/books/booksApi';
import { useGetPublisherQuery } from '../../store/features/publishers/publishersApi';
import { BooksContainer, FilterButtonContainer, TitleStyle } from './Style';

function PublicationItem() {
  const router = useRouter();
  const { data, isLoading } = useGetPublisherQuery(router.query.id);
  const [filterTrig, setFilterTrig] = useState(false);

  const publisherData = data?.data?.attributes;

  const { data: publisherBooks, isLoading: isPublisherBookLoading } =
    useGetBooksByPublisherQuery(publisherData?.name);

  const handleFilter = () => {
    setFilterTrig(!filterTrig);
  };

  return (
    <Box>
      <Grid container spacing={'10px'}>
        {filterTrig && (
          <Grid item lg={3.5}>
            <Filter />
          </Grid>
        )}
        <Grid item lg={filterTrig ? 8.5 : 12}>
          {isLoading ? (
            <Skeleton width={'100%'} height={320} variant={'rounded'} />
          ) : (
            <PublicationCover publisherData={publisherData} />
          )}
          <BooksContainer>
            <TitleStyle variant="h1">Books</TitleStyle>

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
              {isPublisherBookLoading
                ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <Grid
                      item
                      md={6}
                      lg={filterTrig ? 4 : 3}
                      xs={12}
                      key={item}
                    >
                      <BookSkeleton />
                    </Grid>
                  ))
                : publisherBooks?.data?.map((book) => (
                    <Grid
                      item
                      lg={filterTrig ? 4 : 3}
                      md={6}
                      xs={12}
                      key={book?.id}
                    >
                      <BookCard book={book?.attributes} bookId={book?.id} />
                    </Grid>
                  ))}
            </Grid>
            <Stack direction="row" justifyContent="center" my={5}>
              <Button variant="contained" size="large" disableElevation>
                Load More
              </Button>
            </Stack>
          </BooksContainer>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PublicationItem;
