import { Box, Button, Grid } from '@mui/material';
import { Stack } from '@mui/system';
import { useRouter } from 'next/router';
import BookCard from '../../components/BookCard';
import Filter from '../../components/Filter';
import PublicationCover from '../../components/PublicationCover';
import { useGetBooksByPublisherQuery } from '../../store/features/books/booksApi';
import { useGetPublisherQuery } from '../../store/features/publishers/publishersApi';
import { BooksContainer, TitleStyle } from './Style';

const PublicationItem = () => {
  const router = useRouter();
  const { data } = useGetPublisherQuery(router.query.id);

  const publisherData = data?.data?.attributes;

  const { data: publisherBooks } = useGetBooksByPublisherQuery(
    publisherData?.name
  );
  console.log({ publisherData });

  return (
    <Box>
      <Grid container spacing={'10px'}>
        <Grid item lg={3.5}>
          <Filter />
        </Grid>
        <Grid item lg={8.5}>
          <PublicationCover publisherData={publisherData} />
          <BooksContainer>
            <TitleStyle variant="h1">Books</TitleStyle>
            <Grid container spacing={3}>
              {publisherBooks?.data?.map((book) => (
                <Grid item lg={4} md={6} xs={12} key={book?.id}>
                  <BookCard book={book?.attributes} bookId={book?.id} />
                </Grid>
              ))}
            </Grid>
            <Stack direction={'row'} justifyContent={'center'} my={5}>
              <Button variant="contained" size="large" disableElevation={true}>
                Load More
              </Button>
            </Stack>
          </BooksContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PublicationItem;
