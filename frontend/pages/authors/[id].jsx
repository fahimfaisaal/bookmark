import { Button, Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import AuthorProfile from '../../components/AuthorProfile';
import BookCard from '../../components/BookCard';
import { useGetAuthorQuery } from '../../store/features/authors/authorsApi';
import { useGetBooksByAuthorQuery } from '../../store/features/books/booksApi';
import { SectionHeaderStyle } from './Styles';

function AuthorItem() {
  const router = useRouter();
  // console.log({ q: router.query.slug });
  const { data } = useGetAuthorQuery(router.query.id);
  const authorData = data?.data?.attributes;
  // const { name, bio, birth, avatar, books } = authorData;
  // console.log({ name:authorData?.name });
  const { data: authorBooks } = useGetBooksByAuthorQuery(authorData?.name);

  return (
    <Box>
      <AuthorProfile authorInfo={authorData} />
      <SectionHeaderStyle variant="h1">Author Books</SectionHeaderStyle>
      <Box>
        <Grid container spacing={2}>
          {authorBooks?.data?.map((book) => (
            <Grid item lg={3} md={6} xs={12} key={book?.id}>
              <BookCard book={book?.attributes} bookId={book?.id} />
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" justifyContent="center" my={5}>
          <Button variant="contained" size="large" disableElevation>
            Load More
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default AuthorItem;
