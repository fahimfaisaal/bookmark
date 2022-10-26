/** @format */

import { Button, Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import AuthorProfile from '../../components/AuthorProfile';
import BookCard from '../../components/BookCard';
import { SectionHeaderStyle } from './Styles';

const AuthorItem = () => {
  const loopCount = [];
  for (let i = 0; i < 10; i++) {
    loopCount.push(i);
  }
  return (
    <Box>
      <AuthorProfile />
      <SectionHeaderStyle variant="h1">Author Books</SectionHeaderStyle>
      <Box>
        <Grid container spacing={2}>
          {loopCount.map((item) => (
            <Grid item lg={3} md={6} xs={12} key={item}>
              <BookCard />
            </Grid>
          ))}
        </Grid>
        <Stack direction={'row'} justifyContent={'center'} my={5}>
          <Button variant="contained" size="large" disableElevation={true}>
            Load More
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default AuthorItem;
