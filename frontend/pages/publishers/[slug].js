import { Box, Button, Grid } from '@mui/material';
import { Stack } from '@mui/system';
import BookCard from '../../components/BookCard';
import Filter from '../../components/Filter';
import PublicationCover from '../../components/PublicationCover';
import { BooksContainer, TitleStyle } from './Style';

const PublicationItem = () => {
  const loopCount = [];
  for (let i = 0; i < 10; i++) {
    loopCount.push(i);
  }
  return (
    <Box>
      <Grid container spacing={'10px'}>
        <Grid item lg={3.5}>
          <Filter />
        </Grid>
        <Grid item lg={8.5}>
          <PublicationCover />
          <BooksContainer>
            <TitleStyle variant="h1">Books</TitleStyle>
            <Grid container spacing={3}>
              {loopCount.map((item) => (
                <Grid item lg={4} md={6} xs={12} key={item}>
                  <BookCard />
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
