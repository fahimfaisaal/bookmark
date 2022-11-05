import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  Box,
  Button,
  Divider,
  Grid,
  Link as MuiLink,
  Skeleton,
  Typography
} from '@mui/material';
import Rating from '@mui/material/Rating';
import { Stack } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import BookCard from '../../components/BookCard';
import BookSkeleton from '../../components/BookSkeleton';
import CustomImage from '../../components/CustomImage';
import {
  LeftBtnStyle,
  RightBtnStyle
} from '../../components/shared/ui/CarouselBtn/Styles';
import {
  useGetBookQuery,
  useGetBooksByTagsQuery,
  useGetNestedBookItemQuery
} from '../../store/features/books/booksApi';
import {
  useAddToCartMutation,
  useGetCartByUserBookQuery,
  useUpdateCartMutation
} from '../../store/features/carts/cartsApi';
import { shortId } from '../../uitls';
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
  VariantBtnStyle
} from './Styles';

function BookItem() {
  const [openReview, setOpenReview] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [activeVariant, setActiveVariant] = useState(0);
  const [cartQty, setCartQty] = useState(1);
  const router = useRouter();
  const { id } = router.query;
  const authUser = useSelector((state) => state?.auth?.user);
  const { data: book, isLoading } = useGetBookQuery(id);
  const bookData = book?.data?.attributes || {};

  const { data: bookRatings } = useGetNestedBookItemQuery(
    `${id}?populate[ratings][populate][0]=userId`
  );
  const { data: bookVariants } = useGetNestedBookItemQuery(
    `${id}?populate[variants][populate][0]=languageId`
  );

  const relatedBooksQuery = [];
  // tag.attributes.type
  bookData?.categories?.data.map((cat) =>
    relatedBooksQuery.push(
      `&filters[categories][type][$eq]=${cat.attributes.type}`
    )
  );
  const { data: relatedBooks } = useGetBooksByTagsQuery(
    relatedBooksQuery.join()
  );
  const { data: cartBook } = useGetCartByUserBookQuery({
    params: `filters[book][id]=${book?.data?.id}&filters[userId][id]=${authUser?.id}&populate[0]=variant`
  });

  const [updateCart] = useUpdateCartMutation();
  const [addToCart] = useAddToCartMutation();

  const handleSelectVariant = (ind) => {
    setActiveVariant(ind);
  };

  const numberOfReview = bookRatings?.data?.attributes?.ratings?.data.length;
  const avarageReview = bookRatings?.data?.attributes?.ratings?.data.reduce(
    (acc, cur) => acc + Number(cur.attributes.rate),
    0
  );

  const variants = {
    ids: [],
    formates: [],
    discounts: [],
    prices: [],
    pageFormates: [],
    pageQualities: [],
    languages: []
  };

  // console.log({ book, bookRatings, bookVariants, cartBook });
  bookVariants?.data?.attributes?.variants?.data.forEach((variant) => {
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
      setActiveImg((prev) => prev + 1);
    }
    if (activeImg === imgLastInd) {
      setActiveImg(0);
    }
  };
  const handleImgPrev = () => {
    if (activeImg > 0) {
      setActiveImg((prev) => prev - 1);
    }
    if (activeImg === 0) {
      setActiveImg(imgLastInd);
    }
  };
  const handleImgCurrent = (index) => {
    setActiveImg(index);
  };

  const itemIncrement = () => {
    // based on stock
    setCartQty((prev) => prev + 1);
  };
  const itemDecrement = () => {
    if (cartQty > 1) setCartQty((prev) => prev - 1);
  };

  const addToCartBook = () => {
    let data = {};
    data.book = book?.data?.id;
    data.userId = authUser?.id;
    data.variant =
      bookVariants?.data?.attributes?.variants?.data[activeVariant]?.id;
    data.quantity = cartQty;
    if (
      cartBook?.data[0]?.id &&
      cartBook?.data[0]?.attributes?.variant?.data?.id === data?.variant
    ) {
      // cart update
      data.quantity = cartQty + cartBook?.data[0]?.attributes?.quantity;
      // console.log({update:data});
      updateCart({ cartId: cartBook?.data[0]?.id, data });
    } else {
      // cart add
      data = { data };
      console.log({ add: data });
      addToCart(data);
    }
    setCartQty(1);
    console.log({
      cart: cartBook?.data[0],
      data,
      isCart:
        cartBook?.data[0]?.id &&
        cartBook?.data[0]?.attributes?.variant?.data?.id === data?.variant
    });
  };

  return (
    <Box>
      <BookInfoContainer>
        <Grid container spacing="50px">
          <Grid item lg={6} md={12}>
            <BookImagesContainer>
              {isLoading ? (
                <Skeleton width={'100%'} height={550} variant="rectangular" />
              ) : (
                <>
                  <CustomImage
                    src={`http://localhost:1337${bookData?.images?.data[activeImg].attributes.url}`}
                  />
                  <LeftBtnStyle onClick={handleImgPrev}>
                    <FiChevronLeft />
                  </LeftBtnStyle>
                  <RightBtnStyle onClick={handleImgNext}>
                    <FiChevronRight />
                  </RightBtnStyle>
                </>
              )}
            </BookImagesContainer>
            <ImgListContainer py={5}>
              {isLoading ? (
                <>
                  <Box px={1}>
                    <Skeleton
                      width={150}
                      height={200}
                      variant={'rectangular'}
                    />
                  </Box>
                  <Box px={1}>
                    <Skeleton
                      width={150}
                      height={200}
                      variant={'rectangular'}
                    />
                  </Box>
                  <Box px={1}>
                    <Skeleton
                      width={150}
                      height={200}
                      variant={'rectangular'}
                    />
                  </Box>
                </>
              ) : (
                bookData?.images?.data.map((img, ind) => (
                  <ImgListItem
                    active={activeImg === ind}
                    key={ind}
                    onClick={() => handleImgCurrent(ind)}
                  >
                    <CustomImage
                      src={`http://localhost:1337${img.attributes.url}`}
                    />
                  </ImgListItem>
                ))
              )}
            </ImgListContainer>
          </Grid>
          <Grid item lg={6} md={12}>
            <BookDetailsContainer>
              {isLoading ? (
                <Box>
                  <Skeleton width={'100%'} height={50} variant={'text'} />
                  <Skeleton width={'60%'} height={20} variant={'text'} />
                  <Skeleton width={'50%'} height={20} variant={'text'} />
                  <Box py={3}>
                    <Skeleton width={'40%'} height={20} variant={'text'} />
                    <Skeleton width={'20%'} height={20} variant={'text'} />
                  </Box>
                  <Box py={5}>
                    <Box py={2}>
                      <Skeleton width={'70%'} height={20} variant={'text'} />
                    </Box>
                    <Box py={1} mb={3}>
                      <Divider />
                    </Box>
                    <Skeleton width={'80%'} height={20} variant={'text'} />
                    <Skeleton width={'90%'} height={20} variant={'text'} />
                    <Skeleton width={'60%'} height={20} variant={'text'} />
                  </Box>
                  <Box py={1}>
                    <Skeleton width={'100%'} height={20} variant={'text'} />
                  </Box>
                  <Box py={2}>
                    <Skeleton width={'100%'} height={50} variant={'text'} />
                  </Box>
                  <Box py={1} mb={3}>
                    <Divider />
                  </Box>
                  <Box py={2}>
                    <Skeleton width={'100%'} height={20} variant={'text'} />
                    <Skeleton width={'100%'} height={20} variant={'text'} />
                  </Box>
                </Box>
              ) : (
                <>
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    mb={2}
                  >
                    <BookTitleStyle variant="h1">
                      {bookData?.name}
                    </BookTitleStyle>
                    <FavIconStyle>
                      <FavoriteBorderIcon />
                    </FavIconStyle>
                  </Stack>
                  <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <Typography variant="body2">By (Author)</Typography>
                    {bookData?.authors?.data.map((author, index) => (
                      <Link href={`/authors/${author.id}`} key={author.id}>
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
                    <Stack
                      direction={'row'}
                      alignItems={'center'}
                      gap={2}
                      pt={5}
                    >
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
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    spacing={2}
                    mb={3}
                  >
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
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    spacing={2}
                    my={3}
                  >
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
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    spacing={2}
                    my={3}
                  >
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
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    spacing={2}
                    my={3}
                  >
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
                    <Typography variant="body1">
                      {bookData?.description}
                    </Typography>
                    <MuiLink href="#details">See more</MuiLink>
                  </Box>

                  {/* add to cart btn */}
                  <Stack direction={'row'} alignItems={'center'} gap={3} my={3}>
                    <Stack direction={'row'} alignItems={'center'}>
                      <QtyBtnLeft onClick={itemDecrement} disabled={true}>
                        -
                      </QtyBtnLeft>
                      <Qty>{cartQty}</Qty>
                      <QtyBtnRight onClick={itemIncrement}>+</QtyBtnRight>
                    </Stack>
                    <Button
                      variant="contained"
                      fullWidth={true}
                      disableElevation={true}
                      size={'large'}
                      sx={{ padding: '12px' }}
                      onClick={addToCartBook}
                    >
                      Add To Cart
                    </Button>
                  </Stack>
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
                </>
              )}
            </BookDetailsContainer>
          </Grid>
        </Grid>
      </BookInfoContainer>

      <Divider />
      <Box mt={5} id="details">
        <Typography variant="h1" my={2} fontWeight={700}>
          Details
        </Typography>
        {isLoading ? (
          <>
            <Box py={1}>
              <Skeleton width={'40%'} height={20} />
            </Box>
            <Box py={3}>
              <Skeleton width={'20%'} height={15} />
              <Skeleton width={'20%'} height={15} />
              <Skeleton width={'20%'} height={15} />
              <Skeleton width={'20%'} height={15} />
              <Skeleton width={'20%'} height={15} />
              <Skeleton width={'20%'} height={15} />
            </Box>
          </>
        ) : (
          <></>
        )}
        <Typography variant="body2">{bookData?.description}</Typography>
        <Box my={4}>
          <Stack direction="row" gap={2} mb={1} alignItems="center">
            <Typography variant="h3">Title :</Typography>
            <Typography variant="h5">{bookData?.name}</Typography>
          </Stack>
          <Stack direction="row" gap={2} mb={1} alignItems="center">
            <Typography variant="h3">Author :</Typography>
            {bookData?.authors?.data.map((author, index) => (
              <Link key={shortId()} href={`/authors/${author.id}`}>
                <AuthorLinkStyle variant="h5">
                  {author.attributes.name}
                  {bookData?.authors?.data.length > 1 &&
                    bookData?.authors?.data.length - 1 !== index &&
                    ','}
                </AuthorLinkStyle>
              </Link>
            ))}
          </Stack>
          <Stack direction="row" gap={2} mb={1} alignItems="center">
            <Typography variant="h3">Publisher :</Typography>
            <Link href={`/publishers/${bookData?.publisherId?.data?.id}`}>
              <AuthorLinkStyle variant="h5">
                {bookData?.publisherId?.data?.attributes?.name}
              </AuthorLinkStyle>
            </Link>
          </Stack>
          <Stack direction="row" gap={2} mb={1} alignItems="center">
            <Typography variant="h3">Number of Pages :</Typography>
            <Typography variant="h5">{bookData?.totalPages}</Typography>
          </Stack>
          <Stack direction="row" gap={2} mb={1} alignItems="center">
            <Typography variant="h3">Language :</Typography>
            {variants.languages.map((lang, ind) => (
              <Typography variant="h5" key={shortId()}>
                {lang}
                {variants.languages.length > 0 &&
                  ind !== variants.languages.length - ind &&
                  ','}
              </Typography>
            ))}
          </Stack>
          <Stack direction="row" gap={2} mb={1} alignItems="center">
            <Typography variant="h3">Edition :</Typography>
            <Typography variant="h5">1st Edition, 2022</Typography>
          </Stack>
        </Box>
      </Box>

      <Box my={5}>
        <Divider />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
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
          {isLoading ? (
            <>
              <Box py={2}>
                <Skeleton width={'20%'} height={35} variant={'text'} />
                <Skeleton width={'40%'} height={15} variant={'text'} />
                <Skeleton width={'30%'} height={15} variant={'text'} />
              </Box>
              <Box py={2}>
                <Skeleton width={'20%'} height={35} variant={'text'} />
                <Skeleton width={'40%'} height={15} variant={'text'} />
                <Skeleton width={'30%'} height={15} variant={'text'} />
              </Box>
            </>
          ) : (
            bookRatings?.data?.attributes?.ratings?.data.map((rating) => (
              <Box key={rating.id}>
                <ReviewItem rating={rating} />
                <Divider />
              </Box>
            ))
          )}
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
          {isLoading
            ? [1, 2, 3, 4].map((item) => (
                <Grid item lg={3} md={6} xs={12} key={item}>
                  <BookSkeleton />
                </Grid>
              ))
            : relatedBooks?.data?.map((book) => (
                <Grid item lg={3} md={6} xs={12} key={book?.id}>
                  <BookCard book={book?.attributes} bookId={book?.id} />
                </Grid>
              ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default BookItem;
