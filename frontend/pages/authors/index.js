/** @format */

import { Box, Grid, Stack, Typography } from '@mui/material';
import AuthorCard from '../../components/AuthorCard';
import SearchBar from '../../components/shared/SearchBar';
import { HeaderContainerStyle, HeaderStyle } from './Styles';

const Authors = () => {
  const loopCount = [];
  for (let i = 0; i < 10; i++) {
    loopCount.push(i);
  }
  return (
    <Box>
      <HeaderContainerStyle>
        <HeaderStyle>
          <Typography variant="h1" color={'primary'}>
            Search Our beloved authors
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetu eradipiscing elit.
          </Typography>
          <Stack direction={'row'} justifyContent={'center'} my={5}>
            <SearchBar
              placeholder="Search Your Favorite Author from here"
              width="700px"
            />
          </Stack>
        </HeaderStyle>
      </HeaderContainerStyle>
      <Box my={5}>
        <Grid container spacing={3}>
          {loopCount.map((item) => (
            <Grid item lg={2} md={4} sm={6} xs={12} key={item}>
              <AuthorCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Authors;
