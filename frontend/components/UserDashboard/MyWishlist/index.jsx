import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import CustomImage from '../../CustomImage';
import { StyledCart, StyledImage, StyledRemove, StyledStack } from './Styles';
import Rating from '@mui/material/Rating';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useUpdateFavoriteBookMutation } from '../../../store/features/books/booksApi';
import { adjustValidURL } from '../../../utils';

function MyWishlist({ book, bookId }) {
  const router = useRouter();
  const authUser = useSelector((state) => state?.auth?.user);
  const [updateFavoriteBook] = useUpdateFavoriteBookMutation();
  const { images, variants, authors, ratings, name } = book;
  const imgUrl = adjustValidURL(images?.data[0]?.attributes?.url) ||
    '/images/product-dummy.png';
  const numberOfReview = ratings?.data.length;
  const avarageReview = ratings?.data.reduce(
    (acc, cur) => acc + Number(cur.attributes.rate),
    0
  );
  const userIds = new Set(book?.users?.data?.map((item) => item?.id));
  const removeFavourite = () => {
    let data = {};
    let isUserFav = userIds.has(authUser?.id);

    if (isUserFav) {
      userIds.delete(authUser?.id);
      data.users = [...userIds];

      updateFavoriteBook({ bookId, data });
    }
  };

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
              <StyledRemove onClick={removeFavourite}>Remove</StyledRemove>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </StyledStack>
  );
}

export default MyWishlist;
