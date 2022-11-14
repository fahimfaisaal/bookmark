import { Box, Button, Grid, Skeleton } from '@mui/material';
import { Stack } from '@mui/system';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FiFilter } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import BookCard from '../../components/BookCard';
import BookSkeleton from '../../components/BookSkeleton';
import Filter from '../../components/Filter';
import PublicationCover from '../../components/PublicationCover';
import useBooksFilterQuery from '../../hooks/useBooksFilterQuery';
import { useGetPublisherQuery } from '../../store/features/publishers/publishersApi';
import { fakeArr } from '../../utils';
import { BooksContainer, FilterButtonContainer, TitleStyle } from './Style';

function PublicationItem() {
  const router = useRouter();
  const { data, isLoading } = useGetPublisherQuery(router.query.id);
  const publisherData = data?.data?.attributes;
  const {
    pagination,
    books: publishersBooks,
    isLoading: isPublisherBookLoading,
    filterTrig,
    handleFilter,
    paginationHandler
  } = useBooksFilterQuery({ publisherId: router.query.id });

  return (
    <Box>
      <Head>
        <title>{publisherData?.name}</title>
        <meta
          name="description"
          content={`Bookmark application ${publisherData?.name}'s publisher page`}
        />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/2/2f/Icon-green-line-b-default.svg"
        />
      </Head>
      <Grid container spacing={'10px'}>
        {filterTrig && (
          <Grid item lg={3.5}>
            <Filter />
          </Grid>
        )}
        <Grid item lg={filterTrig ? 8.5 : 12}>
          {isLoading ? (
            <Skeleton width={'100%'} height={320} variant={'rounded'} />
          ) : (
            <PublicationCover publisherData={publisherData} />
          )}
          <BooksContainer>
            <TitleStyle variant="h1">Books</TitleStyle>

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

            <Grid container spacing={3}>
              {isPublisherBookLoading
                ? fakeArr(8).map((item) => (
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
                : publishersBooks.map((book) => (
                    <Grid
                      item
                      lg={filterTrig ? 4 : 3}
                      md={6}
                      xs={12}
                      key={book?.id}
                    >
                      <BookCard book={book?.attributes} bookId={book?.id} />
                    </Grid>
                  ))}
            </Grid>
            {pagination?.pageCount > 1 && (
              <Stack direction={'row'} justifyContent={'center'} my={5}>
                <Button
                  variant="contained"
                  size="large"
                  disableElevation={true}
                  onClick={paginationHandler}
                >
                  Load More
                </Button>
              </Stack>
            )}
          </BooksContainer>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PublicationItem;
