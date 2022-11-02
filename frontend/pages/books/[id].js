import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  Box,
  Button,
  Divider,
  Grid,
  Link as MuiLink,
  Typography,
} from '@mui/material';
import Rating from '@mui/material/Rating';
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
import {
  useGetBookQuery,
  useGetBooksByTagsQuery,
  useGetNestedBookItemQuery,
} from '../../store/features/books/booksApi';
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
  OldBookPriceStyle,
  Qty,
  QtyBtnLeft,
  QtyBtnRight,
  VariantBtnStyle,
} from './Styles';

// const images = [
//   '/images/book-1.jpg',
//   '/images/book-2.jpg',
//   '/images/book-3.jpg',
// ];

const loopCount = [];
for (let i = 0; i < 4; i++) {
  loopCount.push(i);
}

const BookItem = () => {
  const [openReview, setOpenReview] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [activeVariant, setActiveVariant] = useState(0);
  const router = useRouter();
  const { id } = router.query;
  const {
    data: book,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetBookQuery(id);
  const bookData = book?.data?.attributes || {};

  const { data: bookRatings } = useGetNestedBookItemQuery(
    `${id}?populate[ratings][populate][0]=userId`
  );
  const { data: bookVariants } = useGetNestedBookItemQuery(
    `${id}?populate[variants][populate][0]=languageId`
  );

  const relatedBooksQuery = [];
  //tag.attributes.type
  bookData?.categories?.data.map((cat) =>
    relatedBooksQuery.push(
      `&filters[categories][type][$eq]=${cat.attributes.type}`
    )
  );
  const { data: relatedBooks } = useGetBooksByTagsQuery(
    relatedBooksQuery.join()
  );
  console.log({ relatedBooks });

  const handleSelectVariant = (ind) => {
    setActiveVariant(ind);
  };

  const numberOfReview = bookRatings?.data?.attributes?.ratings?.data.length;
  const avarageReview = bookRatings?.data?.attributes?.ratings?.data.reduce(
    (acc, cur) => {
      acc += Number(cur.attributes.rate);
      return acc;
    },
    0
  );

  const variants = {
    ids: [],
    formates: [],
    discounts: [],
    prices: [],
    pageFormates: [],
    pageQualities: [],
    languages: [],
  };

  // console.log({ book, bookRatings, bookVariants });
  bookVariants?.data?.attributes?.variants?.data.map((variant) => {
    variants.ids.push(variant?.id);
    variants.formates.push(variant?.attributes?.formate);
    variants.discounts.push(variant?.attributes?.discount);
    variants.prices.push(variant?.attributes?.price);
    variants.pageFormates.push(variant?.attributes?.pageFormate);
    variants.pageQualities.push(variant?.attributes?.pageQuality);
    variants.languages.push(
      variant?.attributes?.languageId?.data?.attributes?.name
    );
  });
  const saveAmount =
    (Number(variants.prices[activeVariant]) / 100) *
    Number(variants.discounts[activeVariant]);
  const newPrice = Number(variants.prices[activeVariant]) - saveAmount;

  const imgLastInd = bookData?.images?.data.length - 1;

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

  return (
    <Box>
      <BookInfoContainer>
        <Grid container spacing={'50px'}>
          <Grid item lg={6} md={12}>
            <BookImagesContainer>
              <CustomImage
                src={`http://localhost:1337${bookData?.images?.data[activeImg].attributes.url}`}
              />
              <LeftBtnStyle onClick={handleImgPrev}>
                <FiChevronLeft />
              </LeftBtnStyle>
              <RightBtnStyle onClick={handleImgNext}>
                <FiChevronRight />
              </RightBtnStyle>
            </BookImagesContainer>
            <ImgListContainer py={5}>
              {bookData?.images?.data.map((img, ind) => (
                <ImgListItem
                  active={activeImg === ind}
                  key={ind}
                  onClick={() => handleImgCurrent(ind)}
                >
                  <CustomImage
                    src={`http://localhost:1337${img.attributes.url}`}
                  />
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
                <BookTitleStyle variant="h1">{bookData?.name}</BookTitleStyle>
                <FavIconStyle>
                  <FavoriteBorderIcon />
                </FavIconStyle>
              </Stack>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Typography variant="body2">By (Author)</Typography>
                {bookData?.authors?.data.map((author, index) => (
                  <Link href={`/authors/${author.id}`}>
                    <AuthorLinkStyle variant="h3">
                      {author.attributes.name}
                      {bookData?.authors?.data.length > 1 &&
                        bookData?.authors?.data.length - 1 !== index &&
                        ','}
                    </AuthorLinkStyle>
                  </Link>
                ))}
              </Stack>
              {numberOfReview > 0 && (
                <Stack pt={2} direction={'row'} alignItems={'center'}>
                  <Rating
                    defaultValue={avarageReview / numberOfReview}
                    precision={0.5}
                    readOnly
                  />
                  <Typography variant="body1" px={2}>
                    {numberOfReview} Reviews
                  </Typography>
                </Stack>
              )}

              {variants.prices.length ? (
                <Stack direction={'row'} alignItems={'center'} gap={2} pt={5}>
                  <OldBookPriceStyle variant="h1">
                    {variants.prices[activeVariant]}$
                  </OldBookPriceStyle>

                  <BookPriceStyle variant="h1">
                    {Math.round(newPrice)}$
                  </BookPriceStyle>
                  <Typography variant="body1">
                    You Save {Math.round(saveAmount)}$ (
                    {variants.discounts[activeVariant]}%)
                  </Typography>
                </Stack>
              ) : (
                <BookPriceStyle variant="h1" py={2}>
                  FREE
                </BookPriceStyle>
              )}
              <Typography variant="h3" pb={5} pt={1}>
                {bookData?.status}
              </Typography>

              <Stack direction={'row'} alignItems={'center'} spacing={2} mb={3}>
                <Typography variant="h3">Language :</Typography>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                  {variants.languages.map((lang, ind) => (
                    <VariantBtnStyle
                      variant="outlined"
                      key={lang}
                      onClick={() => handleSelectVariant(ind)}
                      active={ind === activeVariant}
                    >
                      {lang}
                    </VariantBtnStyle>
                  ))}
                </Stack>
              </Stack>
              <Divider />
              <Stack direction={'row'} alignItems={'center'} spacing={2} my={3}>
                <Typography variant="h3">Book Type :</Typography>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                  {variants.formates.map((formate, ind) => (
                    <VariantBtnStyle
                      variant="outlined"
                      key={formate}
                      onClick={() => handleSelectVariant(ind)}
                      active={ind === activeVariant}
                    >
                      {formate}
                    </VariantBtnStyle>
                  ))}
                </Stack>
              </Stack>
              <Stack direction={'row'} alignItems={'center'} spacing={2} my={3}>
                <Typography variant="h3">Page Quality :</Typography>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                  {variants.pageQualities.map((qal, ind) => (
                    <VariantBtnStyle
                      variant="outlined"
                      key={qal}
                      onClick={() => handleSelectVariant(ind)}
                      active={ind === activeVariant}
                    >
                      {qal}
                    </VariantBtnStyle>
                  ))}
                </Stack>
              </Stack>
              <Stack direction={'row'} alignItems={'center'} spacing={2} my={3}>
                <Typography variant="h3">Page Formate :</Typography>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                  {variants.pageFormates.map((form, ind) => (
                    <VariantBtnStyle
                      variant="outlined"
                      key={form}
                      onClick={() => handleSelectVariant(ind)}
                      active={ind === activeVariant}
                    >
                      {form}
                    </VariantBtnStyle>
                  ))}
                </Stack>
              </Stack>
              <Box pt={3}>
                <Typography variant="body1">{bookData?.description}</Typography>
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
                <Typography variant="body2">
                  {bookData?.categories?.data.map(
                    (cat) => `${cat.attributes.type}, `
                  )}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h3" mb={2}>
                  Tags
                </Typography>
                <Typography variant="body2">
                  {bookData?.tags?.data.map(
                    (tag) => `${tag.attributes.type}, `
                  )}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </BookInfoContainer>
      <Divider />
      <Box mt={5} id={'details'}>
        <Typography variant="h1" my={2} fontWeight={700}>
          Details
        </Typography>
        <Typography variant="body2">{bookData?.description}</Typography>
        <Box my={4}>
          <Stack direction={'row'} gap={2} mb={1} alignItems={'center'}>
            <Typography variant="h3">Title :</Typography>
            <Typography variant="h5">{bookData?.name}</Typography>
          </Stack>
          <Stack direction={'row'} gap={2} mb={1} alignItems={'center'}>
            <Typography variant="h3">Author :</Typography>
            {bookData?.authors?.data.map((author, index) => (
              <Link href={`/authors/${author.id}`}>
                <AuthorLinkStyle variant="h5">
                  {author.attributes.name}
                  {bookData?.authors?.data.length > 1 &&
                    bookData?.authors?.data.length - 1 !== index &&
                    ','}
                </AuthorLinkStyle>
              </Link>
            ))}
          </Stack>
          <Stack direction={'row'} gap={2} mb={1} alignItems={'center'}>
            <Typography variant="h3">Publisher :</Typography>
            <Link href={`/publishers/${bookData?.publisherId?.data?.id}`}>
              <AuthorLinkStyle variant="h5">
                {bookData?.publisherId?.data?.attributes?.name}
              </AuthorLinkStyle>
            </Link>
          </Stack>
          <Stack direction={'row'} gap={2} mb={1} alignItems={'center'}>
            <Typography variant="h3">Number of Pages :</Typography>
            <Typography variant="h5">{bookData?.totalPages}</Typography>
          </Stack>
          <Stack direction={'row'} gap={2} mb={1} alignItems={'center'}>
            <Typography variant="h3">Language :</Typography>
            {variants.languages.map((lang, ind) => (
              <Typography variant="h5" key={ind}>
                {lang}
                {variants.languages.length > 0 &&
                  ind !== variants.languages.length - ind &&
                  ','}
              </Typography>
            ))}
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
            Reviews ({numberOfReview})
          </Typography>
          <Button variant="contained" onClick={handleOpenReview}>
            Add Review
          </Button>
        </Stack>
        <Divider />
        <Box py={3}>
          {bookRatings?.data?.attributes?.ratings?.data.map((rating) => (
            <Box key={rating.id}>
              <ReviewItem rating={rating} />
              <Divider />
            </Box>
          ))}
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
          {relatedBooks?.data?.map((book) => (
            <Grid item lg={3} md={6} xs={12} key={book?.id}>
              <BookCard book={book?.attributes} bookId={book?.id} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default BookItem;
