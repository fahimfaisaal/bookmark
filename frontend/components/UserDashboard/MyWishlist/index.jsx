import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import CustomImage from '../../CustomImage';
import { StyledCart, StyledImage, StyledRemove, StyledStack } from './Styles';
import Rating from '@mui/material/Rating';
import { useRouter } from 'next/router';

function MyWishlist({ book, bookId }) {
  const router = useRouter();
  const { images, variants, authors, ratings, name } = book;
  const imgUrl =
    `http://localhost:1337${images?.data[0]?.attributes?.url}` ||
    '/images/product-dummy.png';
  const numberOfReview = ratings?.data.length;
  const avarageReview = ratings?.data.reduce(
    (acc, cur) => acc + Number(cur.attributes.rate),
    0
  );

  // const addToCartBook = () => {
  //   let data = {};
  //   data.book = book?.data?.id;
  //   data.userId = authUser?.id;
  //   data.variant =
  //     bookVariants?.data?.attributes?.variants?.data[activeVariant]?.id;
  //   data.quantity = cartQty;
  //   if (
  //     cartBook?.data[0]?.id &&
  //     cartBook?.data[0]?.attributes?.variant?.data?.id === data?.variant
  //   ) {
  //     // cart update
  //     data.quantity = cartQty + cartBook?.data[0]?.attributes?.quantity;
  //     // console.log({update:data});
  //     updateCart({ cartId: cartBook?.data[0]?.id, data });
  //   } else {
  //     // cart add
  //     data = { data };
  //     console.log({ add: data });
  //     addToCart(data);
  //   }
  //   setCartQty(1);
  //   console.log({
  //     cart: cartBook?.data[0],
  //     data,
  //     isCart:
  //       cartBook?.data[0]?.id &&
  //       cartBook?.data[0]?.attributes?.variant?.data?.id === data?.variant
  //   });
  // };
  return (
    <StyledStack direction="row" justifyContent="space-between">
      <Grid container>
        <Grid item sm={12} md={5} lg={6}>
          <Stack direction="row" spacing={3} alignItems="center">
            <StyledImage>
              <CustomImage src={imgUrl} width="70px" height="70px" />
            </StyledImage>
            <Stack direction="column" spacing={1}>
              <Typography variant="h3">{name}</Typography>
              <Typography variant="subtitle2">
                {authors?.data[0]?.attributes?.name}
              </Typography>
              {/* <StyledContainer variant="btnDark">
                5 <StarIcon fontSize="small" />
              </StyledContainer> */}
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
            </Stack>
          </Stack>
        </Grid>
        <Grid item sm={12} md={7} lg={6}>
          <Stack direction="column" textAlign="right" marginTop="10px">
            <Typography variant="h3">
              ${variants?.data[0]?.attributes?.price}
            </Typography>
            <Stack direction="row" justifyContent="end">
              <StyledCart onClick={() => router.push(`/books/${bookId}`)}>
                Add to Cart
              </StyledCart>
              <StyledRemove>Remove</StyledRemove>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </StyledStack>
  );
}

export default MyWishlist;
