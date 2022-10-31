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
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import BookCard from '../../components/BookCard';
import CustomImage from '../../components/CustomImage';
import {
  LeftBtnStyle,
  RightBtnStyle,
} from '../../components/shared/ui/CarouselBtn/Styles';
import { useGetBookQuery } from '../../store/features/books/booksApi';
import ReviewForm from './ReviewForm';
import ReviewItem from './ReviewItem';
import {
  AuthorLinkStyle,
  BookDetailsContainer,
  BookImagesContainer,
  BookInfoContainer,
  BookPriceStyle,
  BookTitleStyle,
  FavIconStyle,
  ImgListContainer,
  ImgListItem,
  Qty,
  QtyBtnLeft,
  QtyBtnRight,
  VariantBtnStyle,
} from './Styles';

const images = [
  '/images/book-1.jpg',
  '/images/book-2.jpg',
  '/images/book-3.jpg',
];

const loopCount = [];
for (let i = 0; i < 4; i++) {
  loopCount.push(i);
}

const BookItem = () => {
  const [openReview, setOpenReview] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const imgLastInd = images.length - 1;

  const handleOpenReview = () => {
    setOpenReview(true);
  };

  const handleCloseReview = () => {
    setOpenReview(false);
  };

  const handleImgNext = () => {
    if (activeImg < imgLastInd) {
      setActiveImg((prev) => (prev += 1));
    }
    if (activeImg === imgLastInd) {
      setActiveImg(0);
    }
  };
  const handleImgPrev = () => {
    if (activeImg > 0) {
      setActiveImg((prev) => (prev -= 1));
    }
    if (activeImg === 0) {
      setActiveImg(imgLastInd);
    }
  };
  const handleImgCurrent = (index) => {
    setActiveImg(index);
  };

  const router = useRouter();
  const { id } = router.query;

  const {
    data: book,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetBookQuery(id);

  return (
    <Box>
      <BookInfoContainer>
        <Grid container spacing={'50px'}>
          <Grid item lg={6} md={12}>
            <BookImagesContainer>
              <CustomImage src={images[activeImg]} />
              <LeftBtnStyle onClick={handleImgPrev}>
                <FiChevronLeft />
              </LeftBtnStyle>
              <RightBtnStyle onClick={handleImgNext}>
                <FiChevronRight />
              </RightBtnStyle>
            </BookImagesContainer>
            <ImgListContainer py={5}>
              {images.map((img, ind) => (
                <ImgListItem
                  active={activeImg === ind}
                  key={ind}
                  onClick={() => handleImgCurrent(ind)}
                >
                  <CustomImage src={img} />
                </ImgListItem>
              ))}
            </ImgListContainer>
          </Grid>
          <Grid item lg={6} md={12}>
            <BookDetailsContainer>
              <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                mb={2}
              >
                <BookTitleStyle variant="h1">{'adfadga'}</BookTitleStyle>
                <FavIconStyle>
                  <FavoriteBorderIcon />
                </FavIconStyle>
              </Stack>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Typography variant="body2">By (Author)</Typography>
                <Link href={'/authors/123'}>
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
                <Typography variant="body1">{'dfjaohfo'}</Typography>
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
        <Typography variant="body2">{'dafoa'}</Typography>
        <Box my={4}>
          <Stack direction={'row'} gap={2} mb={1} alignItems={'center'}>
            <Typography variant="h3">Title :</Typography>
            <Typography variant="h5">{'adfjao'}</Typography>
          </Stack>
          <Stack direction={'row'} gap={2} mb={1} alignItems={'center'}>
            <Typography variant="h3">Author :</Typography>
            {/* {authors.map((author) => (
              <Link href={`/authors/${author.id}`}>
                <AuthorLinkStyle variant="h5">
                  {author.attributes.name}
                </AuthorLinkStyle>
              </Link>
            ))} */}
          </Stack>
          <Stack direction={'row'} gap={2} mb={1} alignItems={'center'}>
            <Typography variant="h3">Publisher :</Typography>
            <Link href={'/publishers'}>
              <AuthorLinkStyle variant="h5">
                Jeremy Publications
              </AuthorLinkStyle>
            </Link>
          </Stack>
          <Stack direction={'row'} gap={2} mb={1} alignItems={'center'}>
            <Typography variant="h3">Number of Pages :</Typography>
            <Typography variant="h5">245</Typography>
          </Stack>
          <Stack direction={'row'} gap={2} mb={1} alignItems={'center'}>
            <Typography variant="h3">Language :</Typography>
            <Typography variant="h5">Bangla</Typography>
          </Stack>
          <Stack direction={'row'} gap={2} mb={1} alignItems={'center'}>
            <Typography variant="h3">Edition :</Typography>
            <Typography variant="h5">1st Edition, 2022</Typography>
          </Stack>
        </Box>
      </Box>

      <Box my={5}>
        <Divider />
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography variant="h2" py={3}>
            Reviews (0)
          </Typography>
          <Button variant="contained" onClick={handleOpenReview}>
            Add Review
          </Button>
        </Stack>
        <Divider />
        <Box py={3}>
          <ReviewItem />
          <Divider />
        </Box>
        <ReviewForm
          open={openReview}
          handleClickOpen={handleOpenReview}
          handleClose={handleCloseReview}
        />
      </Box>
      <Box py={5}>
        <Typography variant="h1" my={2} fontWeight={700}>
          Related Books
        </Typography>
        <Grid container spacing={3} py={2}>
          {loopCount.map((item) => (
            <Grid item lg={3} md={6} xs={12} key={item}>
              <BookCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default BookItem;
