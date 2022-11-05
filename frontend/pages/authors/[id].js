import { Button, Grid, Skeleton, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import AuthorProfile from '../../components/AuthorProfile';
import { StyledBox } from '../../components/AuthorProfile/Styles';
import BookCard from '../../components/BookCard';
import BookSkeleton from '../../components/BookSkeleton';
import Filter from '../../components/Filter';
import { useGetAuthorQuery } from '../../store/features/authors/authorsApi';
import { useGetBooksByAuthorQuery } from '../../store/features/books/booksApi';
import { FilterButtonContainer } from '../publishers/Style';
import { SectionHeaderStyle } from './Styles';

const AuthorItem = () => {
  const [filterTrig, setFilterTrig] = useState(false);
  const router = useRouter();
  // console.log({ q: router.query.slug });
  const { data, isLoading } = useGetAuthorQuery(router.query.id);
  const authorData = data?.data?.attributes;
  // const { name, bio, birth, avatar, books } = authorData;
  // console.log({ name:authorData?.name });
  const { data: authorBooks, isLoading: isAuthorBookLoading } =
    useGetBooksByAuthorQuery(authorData?.name);

  const handleFilter = () => {
    setFilterTrig(!filterTrig);
  };

  return (
    <Box>
      <Grid container spacing={'10px'}>
        {filterTrig && (
          <Grid item lg={3.5}>
            <Filter />
          </Grid>
        )}

        <Grid item lg={filterTrig ? 8.5 : 12}>
          {isLoading ? (
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} lg={6}>
                <StyledBox>
                  <Skeleton
                    width={'100%'}
                    height={450}
                    variant={'rectangular'}
                  />
                </StyledBox>
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <Skeleton width={'80%'} height={40} variant={'rectangular'} />

                <Box py={2}>
                  <Skeleton width={'60%'} height={15} variant={'rectangular'} />
                  <Box pt={1}></Box>
                  <Skeleton width={'60%'} height={15} variant={'rectangular'} />
                </Box>
                <Box py={2}>
                  <Skeleton width={'40%'} height={20} variant={'rectangular'} />
                  <Box pt={1}></Box>

                  <Skeleton width={'40%'} height={20} variant={'rectangular'} />
                </Box>
              </Grid>
            </Grid>
          ) : (
            <AuthorProfile authorInfo={authorData} />
          )}
          <SectionHeaderStyle variant="h1">Author Books</SectionHeaderStyle>

          <FilterButtonContainer>
            <Button
              variant="outlined"
              startIcon={filterTrig ? <MdClose /> : <FiFilter />}
              disableElevation={true}
              onClick={handleFilter}
            >
              Filter
            </Button>
          </FilterButtonContainer>
          <Box>
            <Grid container spacing={2}>
              {isAuthorBookLoading
                ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <Grid
                      item
                      md={6}
                      lg={filterTrig ? 4 : 3}
                      xs={12}
                      key={item}
                    >
                      <BookSkeleton />
                    </Grid>
                  ))
                : authorBooks?.data?.map((book) => (
                    <Grid
                      item
                      md={6}
                      lg={filterTrig ? 4 : 3}
                      xs={12}
                      key={book?.id}
                    >
                      <BookCard book={book?.attributes} bookId={book?.id} />
                    </Grid>
                  ))}
            </Grid>
            <Stack direction={'row'} justifyContent={'center'} my={5}>
              <Button variant="contained" size="large" disableElevation={true}>
                Load More
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthorItem;
