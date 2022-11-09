import { Box, debounce, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import AuthorCard from '../../components/AuthorCard';
import AuthorSkeleton from '../../components/AuthorSkeleton';
import CustomLink from '../../components/shared/CustomLink';
import SearchBar from '../../components/shared/SearchBar';
import { useGetAuthorsQuery } from '../../store/features/authors/authorsApi';
import { fakeArr, generateQuery } from '../../utils';
import { HeaderContainerStyle, HeaderStyle } from './Styles';

const getAuthor = () => ({
  data: {
    id: 1,
    attributes: {
      title: 'Search Our Beloved Authors',
      subtitle: 'Lorem ipsum dolor sit amet, consectetu eradipiscing elit.',
      searchPlaceholder: 'Search Your Favorite Author from here'
    }
  }
});

function Authors() {
  const { data: authorContent } = getAuthor();
  const [searchText, setSearchText] = useState('');
  const { data: authorLists, isLoading: isAuthorLoading } = useGetAuthorsQuery({
    query: generateQuery({ searchText })
  });

  const authorSearchHandler = (value) => {
    setSearchText(value);
  };

  return (
    <Box>
      <HeaderContainerStyle>
        <HeaderStyle>
          <Typography variant="h1" color="primary">
            {authorContent?.attributes?.title}
          </Typography>
          <Typography variant="body1">
            {authorContent?.attributes?.subtitle}
          </Typography>
          <Stack direction="row" justifyContent="center" my={5}>
            <SearchBar
              placeholder={authorContent?.attributes?.searchPlaceholder}
              width="700px"
              searchHandler={debounce(authorSearchHandler, 800)}
            />
          </Stack>
        </HeaderStyle>
      </HeaderContainerStyle>
      <Box my={5}>
        <Grid container spacing={3}>
          {isAuthorLoading
            ? fakeArr(12).map((item) => (
                <Grid item lg={2} md={4} sm={6} xs={12} key={item}>
                  <AuthorSkeleton />
                </Grid>
              ))
            : authorLists?.data?.length > 0 &&
              authorLists?.data?.map((author) => (
                <CustomLink href={`/authors/${author?.id}`} key={author?.id}>
                  <Grid item lg={2} md={4} sm={6} xs={12}>
                    <AuthorCard author={author} />
                  </Grid>
                </CustomLink>
              ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Authors;
