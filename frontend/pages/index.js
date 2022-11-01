import { Box, Button, Grid } from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import React from 'react';
import Carousel from 'react-multi-carousel';
import AuthorCard from '../components/AuthorCard';
import BookCard from '../components/BookCard';
import CategoryCard from '../components/CategoryCard';
import PublicationCard from '../components/PublicationCard';
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

import {
  ContainerStyle,
  HeroContainer,
  SectionContainer,
  SectionHeaderStyle,
  SeeAllLinkStyle
} from './Styles';

const responsive = (xl, lg, md, sm, xs) => {
  return {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: xl,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: lg,
    },
    laptop: {
      breakpoint: { max: 1024, min: 769 },
      items: md,
    },
    tablet: {
      breakpoint: { max: 768, min: 481 },
      items: sm,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: xs,
    },
  };
};

const Home = () => {
  const newArraivalDate = new Date().toISOString();
  
  
  const {
    data: authorLists,
    isLoading: isAuthorLoading,
    isError: isAuthorError,
  } = useGetAuthorsQuery();
  const {
    data: publisherLists,
    isLoading: isPublisherLoading,
    isError: isPublisherError,
  } = useGetPublishersQuery();

  const { data: popularbookLists } = useGetBooksQuery({
    params: 'filters[bestSelling][$eq]=true',
  });

  const { data: newbookLists, isLoading: isNewBooksLoading } = useGetBooksQuery(
    {
      params: `filters[createdAt][$gte]=${'2022-10-29T03:07:38.922Z'}&pagination[pageSize]=8`,
    }
  );
  const { data: categoryLists } = useGetCategoryQuery();
  

  console.log({ lists: popularbookLists, isNewBooksLoading });
  return (
    <ContainerStyle>
      <HeroContainer>
        <Link href={'/books'}>
          <Box sx={{ cursor: 'pointer' }}>
            <img src="/images/Cover.png" />
          </Box>
        </Link>
      </HeroContainer>
      <SectionContainer>
        <SectionHeaderStyle variant="h1">Popular Books</SectionHeaderStyle>
        <Grid container spacing={3}>
          {popularbookLists?.data?.slice(0, 8).map((book) => (
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
        <Carousel
          responsive={responsive(10, 7, 5, 3, 2)}
          customLeftArrow={<CustomLeftBtn />}
          customRightArrow={<CustomRightBtn />}
        >
          {categoryLists?.data?.length > 0 &&
            categoryLists?.data?.map((category) => (
              <CategoryCard
                key={category?.id}
                category={category?.attributes}
              />
            ))}
        </Carousel>
      </SectionContainer>

      <SectionContainer>
        <SectionHeaderStyle variant="h1">New Arrival Books</SectionHeaderStyle>
        <Grid container spacing={2}>
          {newbookLists?.data?.map((book) => (
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
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <SectionHeaderStyle variant="h1">Top Authors</SectionHeaderStyle>
          <Link href="/authors">
            <SeeAllLinkStyle>See All</SeeAllLinkStyle>
          </Link>
        </Stack>
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
      </SectionContainer>

      <SectionContainer>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <SectionHeaderStyle variant="h1" sx={{ margin: 0 }}>
            Top Publishers
          </SectionHeaderStyle>
          <Link href="/publishers">
            <SeeAllLinkStyle>See All</SeeAllLinkStyle>
          </Link>
        </Stack>

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
      </SectionContainer>
    </ContainerStyle>
  );
};

export default Home;
