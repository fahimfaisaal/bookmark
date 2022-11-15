import { Box, Button, Grid, Skeleton } from '@mui/material';
import { Stack } from '@mui/system';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
import {
  useGetBooksQuery,
  useGetCategoryQuery
} from '../store/features/books/booksApi';
import { useGetPublishersQuery } from '../store/features/publishers/publishersApi';
import { useGetHomeQuery } from '../store/features/singleType/home/homeApi';
import { fakeArr, generateQuery } from '../utils';

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
  const router = useRouter();
  const { data: home } = useGetHomeQuery();

  const renderCounts = {
    newArrival: home?.data?.attributes?.newArrival?.renderCount,
    categories: home?.data?.attributes?.categories?.renderCount,
    popular: home?.data?.attributes?.popular?.renderCount,
    publisher: home?.data?.attributes?.publisher?.renderCount,
    author: home?.data?.attributes?.author?.renderCount
  };

  const { data: authorLists, isLoading: isAuthorLoading } =
    useGetAuthorsQuery();
  const { data: publisherLists, isLoading: isPublisherLoading } =
    useGetPublishersQuery();
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetCategoryQuery();

  const memoDate = useMemo(() => new Date().toISOString(), []);
  // TODO: use useFilterBooksQuery
  const { data: newBooks, isLoading: isNewBooksLoading } = useGetBooksQuery({
    query: generateQuery({
      pageSize: renderCounts.newArrival,
      publishedAt: {
        $lte: memoDate
      }
    })
  });
  // TODO: use useFilterBooksQuery
  const { data: popularBooks, isLoading: isPopularBookLoading } =
    useGetBooksQuery({
      query: generateQuery({
        pageSize: renderCounts.popular,
        bestSelling: true,
        sortKey: 'id'
      })
    });

  return (
    <ContainerStyle>
      <Head>
        <title>Bookmark</title>
        <meta
          name="description"
          content="Buy your favorite book from our site"
        />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/2/2f/Icon-green-line-b-default.svg"
        />
      </Head>
      <HeroContainer sx={{ cursor: 'pointer' }}>
        <Link href={`/books`}>
          <Banner bannerData={home?.data?.attributes?.sliders} />
        </Link>
      </HeroContainer>

      <SectionContainer>
        <SectionHeaderStyle variant="h1">
          {home?.data?.attributes?.popular?.title}
        </SectionHeaderStyle>

        <Grid container spacing={3}>
          {isPopularBookLoading
            ? fakeArr(renderCounts.popular ?? 12).map((item) => (
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
          {home?.data?.attributes?.category?.title}
        </SectionHeaderStyle>
        {isCategoriesLoading ? (
          <Carousel
            responsive={responsive(10, 7, 5, 3, 2)}
            customLeftArrow={<CustomLeftBtn />}
            customRightArrow={<CustomRightBtn />}
          >
            {fakeArr(renderCounts.categories ?? 12).map((item) => (
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
                  key={category.id}
                  id={category.id}
                  category={category.attributes}
                />
              ))}
          </Carousel>
        )}
      </SectionContainer>

      <SectionContainer>
        <SectionHeaderStyle variant="h1">
          {home?.data?.attributes?.newArrival?.title}
        </SectionHeaderStyle>
        <Grid container spacing={2}>
          {isNewBooksLoading
            ? fakeArr(renderCounts.newArrival ?? 12).map((item) => (
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
          {home?.data?.attributes?.newArrival?.buttons?.map((item) => (
            <Button
              variant="contained"
              size="large"
              disableElevation={true}
              key={item.id}
              onClick={() => router.push(item.url)}
            >
              {item.text}
            </Button>
          ))}
        </Stack>
      </SectionContainer>

      <SectionContainer>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <SectionHeaderStyle variant="h1">
            {home?.data?.attributes?.author?.title}
          </SectionHeaderStyle>

          {home?.data?.attributes?.author?.buttons?.map((btn) => (
            <Link href={btn.url || '/'} key={btn.id}>
              <SeeAllLinkStyle>{btn.text}</SeeAllLinkStyle>
            </Link>
          ))}
        </Stack>
        {isAuthorLoading ? (
          <Carousel
            responsive={responsive(8, 6, 3, 2, 1)}
            customLeftArrow={<CustomLeftBtn />}
            customRightArrow={<CustomRightBtn />}
          >
            {fakeArr(renderCounts.author ?? 12).map((item) => (
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
            {home?.data?.attributes?.publisher?.title}
          </SectionHeaderStyle>
          {home?.data?.attributes?.publisher?.buttons?.map((btn) => (
            <Link href={btn?.url || '/'} key={btn.id}>
              <SeeAllLinkStyle>{btn.text}</SeeAllLinkStyle>
            </Link>
          ))}
        </Stack>
        {isPublisherLoading ? (
          <Carousel
            responsive={responsive(7, 5, 3, 2, 1)}
            customLeftArrow={<CustomLeftBtn />}
            customRightArrow={<CustomRightBtn />}
          >
            {fakeArr(renderCounts.publisher ?? 12).map((item) => (
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
