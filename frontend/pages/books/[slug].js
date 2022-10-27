import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  Box,
  Button,
  Divider,
  Grid,
  Link as MuiLink,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import React from 'react';
import CustomImage from '../../components/CustomImage';
import {
  AuthorLinkStyle,
  BookDetailsContainer,
  BookImagesContainer,
  BookInfoContainer,
  BookPriceStyle,
  BookTitleStyle,
  FavIconStyle,
  Qty,
  QtyBtnLeft,
  QtyBtnRight,
  VariantBtnStyle,
} from './Styles';

const BookItem = () => {
  return (
    <Box>
      <BookInfoContainer>
        <Grid container spacing={'50px'}>
          <Grid item lg={6} md={12}>
            <BookImagesContainer>
              <CustomImage src={'/images/book-1.jpg'} />
            </BookImagesContainer>
          </Grid>
          <Grid item lg={6} md={12}>
            <BookDetailsContainer>
              <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                mb={2}
              >
                <BookTitleStyle variant="h1">Superhero & Aliens</BookTitleStyle>
                <FavIconStyle>
                  <FavoriteBorderIcon />
                </FavIconStyle>
              </Stack>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Typography variant="body2">By (Author)</Typography>
                <Link href={'/authors'}>
                  <AuthorLinkStyle variant="h3">
                    Brandon T. Trigg
                  </AuthorLinkStyle>
                </Link>
              </Stack>
              <BookPriceStyle variant="h1">$300 - 350$</BookPriceStyle>
              <Stack direction={'row'} alignItems={'center'} spacing={2} mb={3}>
                <Typography variant="h3">Language :</Typography>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                  <VariantBtnStyle variant="outlined">English</VariantBtnStyle>
                  <VariantBtnStyle variant="outlined">Bangla</VariantBtnStyle>
                  <VariantBtnStyle variant="outlined">Arabic</VariantBtnStyle>
                </Stack>
              </Stack>
              <Divider />
              <Stack direction={'row'} alignItems={'center'} spacing={2} my={3}>
                <Typography variant="h3">Book Type :</Typography>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                  <VariantBtnStyle variant="outlined">
                    HandCover Book
                  </VariantBtnStyle>
                  <VariantBtnStyle variant="outlined">PDF Book</VariantBtnStyle>
                </Stack>
              </Stack>
              <Stack direction={'row'} alignItems={'center'} spacing={2} my={3}>
                <Typography variant="h3">Page Type :</Typography>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                  <VariantBtnStyle variant="outlined">
                    White Smooth Offset
                  </VariantBtnStyle>
                  <VariantBtnStyle variant="outlined">
                    Natural Smooth Offse
                  </VariantBtnStyle>
                  <VariantBtnStyle variant="outlined">
                    White Gloss Text
                  </VariantBtnStyle>
                </Stack>
              </Stack>
              <Box pt={3}>
                <Typography variant="body1">
                  A comic book, also called ridiculous book, ridiculous magazine
                  or simply ridiculous, is a publication that consists of comics
                  art in the form of succe...
                </Typography>
                <MuiLink href="#details">See more</MuiLink>
              </Box>
              <Stack direction={'row'} alignItems={'center'} gap={3} my={3}>
                <Stack direction={'row'} alignItems={'center'}>
                  <QtyBtnLeft>-</QtyBtnLeft>
                  <Qty>1</Qty>
                  <QtyBtnRight>+</QtyBtnRight>
                </Stack>
                <Button
                  variant="contained"
                  fullWidth={true}
                  disableElevation={true}
                  size={'large'}
                  sx={{ padding: '12px' }}
                >
                  Add To Cart
                </Button>
              </Stack>
            </BookDetailsContainer>
            <Divider />
            <Stack
              direction={'row'}
              alignItems={'center'}
              my={5}
              justifyContent={'space-between'}
            >
              <Box>
                <Typography variant="h3" mb={2}>
                  Categories
                </Typography>
                <Typography variant="body2">Commic Book</Typography>
              </Box>
              <Box>
                <Typography variant="h3" mb={2}>
                  Tags
                </Typography>
                <Typography variant="body2">
                  FIrst Edition, Space, Fantasy
                </Typography>
              </Box>
              <Box>
                <Typography variant="h3" mb={2}>
                  SKU
                </Typography>
                <Typography variant="body2">adf0rfuasd089f0e</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </BookInfoContainer>
      <Divider />
      <Box mt={5}>
        <Typography variant="h1" my={2} fontWeight={700}>
          Details
        </Typography>
        <Typography variant="body2">
          A comic book, also called ridiculous book, ridiculous magazine or
          simply ridiculous, is a publication that consists of comics art in the
          form of successional adjoining panels that represent individual
          scenes.
        </Typography>
        <Box my={4}>
          <Stack direction={'row'} gap={2} mb={1}>
            <Typography variant="h3">Title :</Typography>
            <Typography variant="body2">Superhero & Aliens</Typography>
          </Stack>
          <Stack direction={'row'} gap={2} mb={1}>
            <Typography variant="h3">Author :</Typography>
            <Link href={'/authors'}>
              <AuthorLinkStyle variant="body2">
                Brandon T. Trigg
              </AuthorLinkStyle>
            </Link>
          </Stack>
          <Stack direction={'row'} gap={2} mb={1}>
            <Typography variant="h3">Publisher :</Typography>
            <Link href={'/publishers'}>
              <AuthorLinkStyle variant="body2">
                Jeremy Publications
              </AuthorLinkStyle>
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default BookItem;
