import { Box, debounce, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import PublicationCard from '../../components/PublicationCard';
import PublisherSkeleton from '../../components/PublisherSkeleton';
import CustomLink from '../../components/shared/CustomLink';
import SearchBar from '../../components/shared/SearchBar';
import { useGetPublishersQuery } from '../../store/features/publishers/publishersApi';
import { fakeArr, generateQuery } from '../../utils';
import { HeaderContainerStyle, HeaderStyle } from '../authors/Styles';

const getPublisherData = () => ({
  data: {
    id: 1,
    attributes: {
      title: 'Manufacturers/Publishers',
      subtitle: 'Lorem ipsum dolor sit amet, consectetu eradipiscing elit.',
      searchPlaceholder: 'Search Your Favorite Publisher from here'
    }
  }
});

function Publications() {
  const [searchText, setSearchText] = useState('');
  const { data: publisherLists, isLoading: isPublisherLoading } =
    useGetPublishersQuery({ query: generateQuery({ searchText }) });
  console.log({ searchText: generateQuery({ searchText }) });

  const publisherSearchHandler = (value) => {
    setSearchText(value);
  };

  const { data: publisherData } = getPublisherData();
  return (
    <Box>
      <HeaderContainerStyle>
        <HeaderStyle>
          <Typography variant="h1" color="primary">
            {publisherData?.attributes?.title}
          </Typography>
          <Typography variant="body1">
            {publisherData?.attributes?.subtitle}
          </Typography>
          <Stack direction="row" justifyContent="center" my={5}>
            <SearchBar
              placeholder={publisherData?.attributes?.searchPlaceholder}
              width="700px"
              searchHandler={debounce(publisherSearchHandler, 800)}
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
