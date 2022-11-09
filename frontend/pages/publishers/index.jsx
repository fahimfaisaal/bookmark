import { Box, Grid, Stack, Typography } from '@mui/material';
import PublicationCard from '../../components/PublicationCard';
import PublisherSkeleton from '../../components/PublisherSkeleton';
import CustomLink from '../../components/shared/CustomLink';
import SearchBar from '../../components/shared/SearchBar';
import { useGetPublishersQuery } from '../../store/features/publishers/publishersApi';
import { fakeArr } from '../../utils';
import { HeaderContainerStyle, HeaderStyle } from '../authors/Styles';

const getPublisherData = () => ({
  data: {
    id: 1,
    attributes: {
      title: 'Manufacturers/Publishers',
      subtitle: 'Lorem ipsum dolor sit amet, consectetu eradipiscing elit.'
    }
  }
});

function Publications() {
  const { data: publisherLists, isLoading: isPublisherLoading } =
    useGetPublishersQuery();

  const { data: publisherData } = getPublisherData();
  return (
    <Box>
      <HeaderContainerStyle>
        <HeaderStyle>
          <Typography variant="h1" color="primary">
            {publisherData.attributes?.title}
          </Typography>
          <Typography variant="body1">
            {publisherData.attributes?.subtitle}
          </Typography>
          <Stack direction="row" justifyContent="center" my={5}>
            <SearchBar
              placeholder="Search Your Favorite Author from here"
              width="700px"
            />
          </Stack>
        </HeaderStyle>
      </HeaderContainerStyle>
      <Box my={5}>
        <Grid container spacing={2}>
          {isPublisherLoading
            ? fakeArr(12).map((item) => (
                <Grid item lg={2.4} md={4} sm={6} xs={12} key={item}>
                  <PublisherSkeleton />
                </Grid>
              ))
            : publisherLists?.data?.length > 0 &&
              publisherLists?.data?.map((publisher) => (
                <CustomLink
                  href={`/publishers/${publisher?.id}`}
                  key={publisher?.id}
                >
                  <Grid item lg={2.4} md={4} sm={6} xs={12} key={publisher?.id}>
                    <PublicationCard publisher={publisher} />
                  </Grid>
                </CustomLink>
              ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Publications;
