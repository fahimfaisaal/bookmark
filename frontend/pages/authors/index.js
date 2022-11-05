import { Box, Grid, Stack, Typography } from '@mui/material';
import AuthorCard from '../../components/AuthorCard';
import CustomLink from '../../components/shared/CustomLink';
import SearchBar from '../../components/shared/SearchBar';
import { useGetAuthorsQuery } from '../../store/features/authors/authorsApi';
import { HeaderContainerStyle, HeaderStyle } from './Styles';

const Authors = () => {
  const {
    data: authorLists,
    isLoading: isAuthorLoading,
    isError: isAuthorError
  } = useGetAuthorsQuery();
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
          {authorLists?.data?.length > 0 &&
            authorLists?.data?.map((author) => (
              <CustomLink
                href={`/authors/${author?.attributes?.id}`}
                key={author?.id}
              >
                <Grid item lg={2} md={4} sm={6} xs={12}>
                  <AuthorCard author={author} />
                </Grid>
              </CustomLink>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Authors;
