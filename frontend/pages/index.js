/** @format */

import { Grid, Link } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import AuthorCard from '../components/AuthorCard';
import BookCard from '../components/BookCard';
import CategoryCard from '../components/CategoryCard';
import PublicationCard from '../components/PublicationCard';
import {
  CustomLeftBtn,
  CustomRightBtn,
} from '../components/shared/ui/CarouselBtn';
import {
  ContainerStyle,
  HeroContainer,
  SectionContainer,
  SectionHeaderStyle,
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
  const loopCount = [];
  for (let i = 0; i < 10; i++) {
    loopCount.push(i);
  }
  return (
    <ContainerStyle>
      <HeroContainer>
        <Link sx={{ cursor: 'pointer' }}>
          <img src="/images/Cover.png" />
        </Link>
      </HeroContainer>
      <SectionContainer>
        <SectionHeaderStyle variant="h1">Popular Products</SectionHeaderStyle>
        <Grid container spacing={3}>
          {loopCount.map((item) => (
            <Grid item lg={3} md={6} xs={12} key={item}>
              <BookCard />
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
          {loopCount.map((item) => (
            <CategoryCard key={item} />
          ))}
        </Carousel>
      </SectionContainer>

      <SectionContainer>
        <SectionHeaderStyle variant="h1">New Arrival Books</SectionHeaderStyle>
        <Grid container spacing={2}>
          {loopCount.map((item) => (
            <Grid item lg={3} md={6} xs={12} key={item}>
              <BookCard />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      <SectionContainer>
        <SectionHeaderStyle variant="h1">Top Authors</SectionHeaderStyle>
        <Carousel
          responsive={responsive(8, 6, 3, 2, 1)}
          customLeftArrow={<CustomLeftBtn />}
          customRightArrow={<CustomRightBtn />}
        >
          {loopCount.map((item) => (
            <AuthorCard key={item} />
          ))}
        </Carousel>
      </SectionContainer>

      <SectionContainer>
        <SectionHeaderStyle variant="h1" sx={{ margin: 0 }}>
          Top Publishers
        </SectionHeaderStyle>

        <Carousel
          responsive={responsive(5, 4, 2, 1, 1)}
          customLeftArrow={<CustomLeftBtn />}
          customRightArrow={<CustomRightBtn />}
        >
          {loopCount.map((item) => (
            <PublicationCard key={item} />
          ))}
        </Carousel>
      </SectionContainer>
    </ContainerStyle>
  );
};

export default Home;
