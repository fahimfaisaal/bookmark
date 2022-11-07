import { Box, Button, Grid, Skeleton } from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import React, { useMemo } from 'react';
import Carousel from 'react-multi-carousel';
import AuthorCard from '../components/AuthorCard';
import AuthorSkeleton from '../components/AuthorSkeleton';
import Banner from '../components/Banner';
import BookCard from '../components/BookCard';
import BookSkeleton from '../components/BookSkeleton';
import CategoryCard from '../components/CategoryCard';
import PublicationCard from '../components/PublicationCard';
import PublisherSkeleton from '../components/PublisherSkeleton';
import {
  CustomLeftBtn,
  CustomRightBtn
} from '../components/shared/ui/CarouselBtn';
import { useGetAuthorsQuery } from '../store/features/authors/authorsApi';
import { useGetBannersQuery } from '../store/features/banner/bannerApi';
import {
  useGetBooksQuery,
  useGetCategoryQuery
} from '../store/features/books/booksApi';
import { fakeArr } from '../utils';
import { useGetPublishersQuery } from '../store/features/publishers/publishersApi';

import {
  ContainerStyle,
  HeroContainer,
  SectionContainer,
  SectionHeaderStyle,
  SeeAllLinkStyle
} from './Styles';

const responsive = (xl, lg, md, sm, xs) => ({
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: xl
  },
  desktop: {
    breakpoint: { max: 3000, min: 1025 },
    items: lg
  },
  laptop: {
    breakpoint: { max: 1024, min: 769 },
    items: md
  },
  tablet: {
    breakpoint: { max: 768, min: 481 },
    items: sm
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: xs
  }
});

function Home() {
  const { data: authorLists, isLoading: isAuthorLoading } =
    useGetAuthorsQuery();
  const { data: publisherLists, isLoading: isPublisherLoading } =
    useGetPublishersQuery();
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetCategoryQuery();
  const memoDate = useMemo(() => new Date().toISOString(), []);
  const { data: newBooks, isLoading: isNewBooksLoading } = useGetBooksQuery({
    query: {
      populate: '*',
      pagination: {
        pageSize: 8
      },
      filters: {
        publishedAt: {
          $lte: memoDate
        }
      }
    }
  });
  const { data: popularBooks, isLoading: isPopularBookLoading } =
    useGetBooksQuery({
      query: {
        populate: '*',
        pagination: {
          pageSize: 8
        },
        filters: {
          bestSelling: true
        },
        sort: 'id'
      }
    });
  const { data: banners } = useGetBannersQuery();

  // const bannerImg =
  //   (banners?.data &&
  //     `http://localhost:1337${banners?.data?.attributes?.images?.data[0]?.attributes?.url}`) ||
  //   '/images/Cover.png';


  return (
    <ContainerStyle>
      <HeroContainer sx={{ cursor: 'pointer' }}>
        <Link href={`/books/${banners?.data?.attributes?.book?.data?.id}`}>
          <Banner />
        </Link>
      </HeroContainer>
      <SectionContainer>
        <SectionHeaderStyle variant="h1">Popular Books</SectionHeaderStyle>

        <Grid container spacing={3}>
          {isPopularBookLoading
            ? fakeArr(8).map((item) => (
                <Grid item lg={3} md={6} xs={12} key={item}>
                  <BookSkeleton />
                </Grid>
              ))
            : popularBooks?.data?.map((book) => (
                <Grid item lg={3} md={6} xs={12} key={book?.id}>
                  <BookCard book={book?.attributes} bookId={book?.id} />
                </Grid>
              ))}
        </Grid>
      </SectionContainer>

      <SectionContainer>
        <SectionHeaderStyle variant="h1">
          Which Book You Like to See?
        </SectionHeaderStyle>
        {isCategoriesLoading ? (
          <Carousel
            responsive={responsive(10, 7, 5, 3, 2)}
            customLeftArrow={<CustomLeftBtn />}
            customRightArrow={<CustomRightBtn />}
          >
            {fakeArr(12).map((item) => (
              <Box key={item} px={2}>
                <Skeleton width={'100%'} height={150} variant={'rounded'} />
                <Skeleton width={'50%'} height={15} variant={'text'} />
              </Box>
            ))}
          </Carousel>
        ) : (
          <Carousel
            responsive={responsive(10, 7, 5, 3, 2)}
            customLeftArrow={<CustomLeftBtn />}
            customRightArrow={<CustomRightBtn />}
          >
            {categories?.data?.length > 0 &&
              categories?.data?.map((category) => (
                <CategoryCard
                  key={category?.id}
                  category={category?.attributes}
                />
              ))}
          </Carousel>
        )}
      </SectionContainer>

      <SectionContainer>
        <SectionHeaderStyle variant="h1">New Arrival Books</SectionHeaderStyle>
        <Grid container spacing={2}>
          {isNewBooksLoading
            ? fakeArr(12).map((item) => (
                <Grid item lg={3} md={6} xs={12} key={item}>
                  <BookSkeleton />
                </Grid>
              ))
            : newBooks?.data?.map((book) => (
                <Grid item lg={3} md={6} xs={12} key={book?.id}>
                  <BookCard book={book?.attributes} bookId={book?.id} />
                </Grid>
              ))}
        </Grid>
        <Stack direction={'row'} justifyContent={'center'} my={5}>
          <Button variant="contained" size="large" disableElevation={true}>
            Load More
          </Button>
        </Stack>
      </SectionContainer>

      <SectionContainer>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <SectionHeaderStyle variant="h1">Top Authors</SectionHeaderStyle>
          <Link href="/authors">
            <SeeAllLinkStyle>See All</SeeAllLinkStyle>
          </Link>
        </Stack>
        {isAuthorLoading ? (
          <Carousel
            responsive={responsive(8, 6, 3, 2, 1)}
            customLeftArrow={<CustomLeftBtn />}
            customRightArrow={<CustomRightBtn />}
          >
            {fakeArr(12).map((item) => (
              <AuthorSkeleton key={item} />
            ))}
          </Carousel>
        ) : (
          <Carousel
            responsive={responsive(8, 6, 3, 2, 1)}
            customLeftArrow={<CustomLeftBtn />}
            customRightArrow={<CustomRightBtn />}
          >
            {authorLists?.data?.length > 0 &&
              authorLists?.data?.map((author) => (
                <AuthorCard key={author?.id} author={author} />
              ))}
          </Carousel>
        )}
      </SectionContainer>

      <SectionContainer>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <SectionHeaderStyle variant="h1" sx={{ margin: 0 }}>
            Top Publishers
          </SectionHeaderStyle>
          <Link href="/publishers">
            <SeeAllLinkStyle>See All</SeeAllLinkStyle>
          </Link>
        </Stack>
        {isPublisherLoading ? (
          <Carousel
            responsive={responsive(7, 5, 3, 2, 1)}
            customLeftArrow={<CustomLeftBtn />}
            customRightArrow={<CustomRightBtn />}
          >
            {fakeArr(12).map((item) => (
              <PublisherSkeleton key={item} />
            ))}
          </Carousel>
        ) : (
          <Carousel
            responsive={responsive(7, 5, 3, 2, 1)}
            customLeftArrow={<CustomLeftBtn />}
            customRightArrow={<CustomRightBtn />}
          >
            {publisherLists?.data?.length > 0 &&
              publisherLists?.data?.map((publisher) => (
                <PublicationCard key={publisher?.id} publisher={publisher} />
              ))}
          </Carousel>
        )}
      </SectionContainer>
    </ContainerStyle>
  );
}

export default Home;
