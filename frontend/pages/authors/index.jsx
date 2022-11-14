import { Box, debounce, Grid, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';
import AuthorCard from '../../components/AuthorCard';
import AuthorSkeleton from '../../components/AuthorSkeleton';
import CustomLink from '../../components/shared/CustomLink';
import SearchBar from '../../components/shared/SearchBar';
import { useGetAuthorsQuery } from '../../store/features/authors/authorsApi';
import { useGetWriterQuery } from '../../store/features/singleType/writer/writerApi';
import { fakeArr, generateQuery } from '../../utils';
import { HeaderContainerStyle, HeaderStyle } from './Styles';

function Authors() {
  const [searchText, setSearchText] = useState('');
  const { data: authorLists, isLoading: isAuthorLoading } = useGetAuthorsQuery({
    query: generateQuery({ searchText })
  });

  const { data: writer } = useGetWriterQuery();

  const authorSearchHandler = (value) => {
    setSearchText(value);
  };

  return (
    <Box>
      <Head>
        <title>Authors</title>
        <meta name="description" content="Bookmark application all authors" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/2/2f/Icon-green-line-b-default.svg"
        />
      </Head>
      <HeaderContainerStyle>
        <HeaderStyle>
          <Typography variant="h1" color="primary">
            {writer?.data?.attributes?.title}
          </Typography>
          <Typography variant="body1">
            {writer?.data?.attributes?.subtitle}
          </Typography>
          <Stack direction="row" justifyContent="center" my={5}>
            <SearchBar
              placeholder={writer?.data?.attributes?.searchPlaceholder}
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
