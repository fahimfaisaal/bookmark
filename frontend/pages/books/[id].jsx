import FavoriteIcon from '@mui/icons-material/Favorite';
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
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import BookCard from '../../components/BookCard';
import BookSkeleton from '../../components/BookSkeleton';
import CustomImage from '../../components/CustomImage';
import {
  LeftBtnStyle,
  RightBtnStyle
} from '../../components/shared/ui/CarouselBtn/Styles';
import { openLoginModal } from '../../store/features/authModal/authModalSlice';
import {
  useGetBookQuery,
  useGetBooksByTagsQuery,
  useGetNestedBookItemQuery,
  useUpdateFavoriteBookMutation
} from '../../store/features/books/booksApi';
import {
  useAddToCartMutation,
  useGetCartByUserBookQuery,
  useUpdateCartMutation
} from '../../store/features/carts/cartsApi';
import { shortId } from '../../utils';
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
  const [favorite, setFavorite] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [activeVariant, setActiveVariant] = useState(0);
  const [cartQty, setCartQty] = useState(1);
  const router = useRouter();
  const { id } = router.query;
  const authUser = useSelector((state) => state?.auth?.user);
  const { data: book, isLoading } = useGetBookQuery(id);
  const bookData = book?.data?.attributes || {};
  const dispatch = useDispatch();

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
  const [updateFavoriteBook] = useUpdateFavoriteBookMutation();

  useEffect(() => {
    setFavorite(!!bookData?.isFavorite);
  }, [bookData]);

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

  // const userIds = bookData?.users?.data?.map((item) => item?.id) || [];
  const userIds = new Set(bookData?.users?.data?.map((item) => item?.id));
  console.log({ userIds });

  const handleFavorite = () => {
    if (!authUser?.id) {
      dispatch(openLoginModal());
      toast.error('You must login first to add to favorite!');
      return;
    }
    let data = {};
    // let isUserFav = userIds?.find((item) => item === authUser?.id);
    let isUserFav = userIds.has(authUser?.id);

    if (isUserFav) {
      // data.users = userIds?.filter((item) => item !== authUser?.id);
      userIds.delete(authUser?.id);
      data.users = [...userIds];

      updateFavoriteBook({ bookId: id, data });
      setFavorite(false);
      console.log({ id, data, msg: 'remove', userIds, isUserFav });
    } else {
      data.users = [...userIds, authUser?.id];
      console.log({
        id,
        data,
        msg: 'add',
        userIds,
        isUserFav,
        userId: authUser?.id
      });
      updateFavoriteBook({ bookId: id, data });
      setFavorite(true);
    }
  };

  const addToCartBook = () => {
    if (!authUser?.id) {
      dispatch(openLoginModal());
      toast.error('You must login first to add to cart!');
      return;
    }
    let data = {};
    data.book = book?.data?.id;
    data.cartThumbnail =
      book?.data?.attributes?.images?.data?.at()?.attributes?.formats?.thumbnail?.url;
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
      toast.success(`${cartQty} item(s) have been updated in your cart`);
    } else {
      // cart add
      data = { data };
      console.log({ add: data });
      addToCart(data);
      toast.success(`${cartQty} new item(s) have been added to your cart`);
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
      <Head>
        <title>{bookData?.name || 'Book Name'}</title>
        <meta name="description" content={bookData?.description} />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/2/2f/Icon-green-line-b-default.svg"
        />
      </Head>
      <BookInfoContainer>
        <Grid container spacing="50px">
          <Grid item lg={6} md={12}>
            <BookImagesContainer>
              {isLoading ? (
                <Skeleton width={'100%'} height={550} variant="rectangular" />
              ) : (
                <>
                  <CustomImage
                    src={bookData?.images?.data[activeImg].attributes.url}
                    alt={bookData?.name}
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
                      src={img.attributes.url}
                      alt={bookData?.name}
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
                    <FavIconStyle onClick={handleFavorite}>
                      {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
