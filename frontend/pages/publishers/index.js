import { Box, Grid, Stack, Typography } from '@mui/material';
import PublicationCard from '../../components/PublicationCard';
import SearchBar from '../../components/shared/SearchBar';
import { HeaderContainerStyle, HeaderStyle } from '../authors/Styles';

const Publications = () => {
  const loopCount = [];
  for (let i = 0; i < 10; i++) {
    loopCount.push(i);
  }
  return (
    <Box>
      <HeaderContainerStyle>
        <HeaderStyle>
          <Typography variant="h1" color={'primary'}>
            Manufacturers/Publishers
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
        <Grid container spacing={2}>
          {loopCount.map((item) => (
            <Grid item lg={3} md={6} sm={12} xs={12} key={item}>
              <PublicationCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Publications;
