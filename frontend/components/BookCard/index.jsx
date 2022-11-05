import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Rating, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import CustomImage from '../CustomImage';

import {
  CartBtnStyle,
  ContentContainerStyle,
  DiscountLabelStyle,
  PriceStyle,
  StyledBox,
  StyledFav,
  TitleStyle,
  WriterLinkStyle
} from './Styles';

function BookCard({ book, bookId }) {
  const [favorite, setFavorite] = useState(false);
  const { authors, images, variants, status, ratings } = book || {};

  const bookImage =
    (images?.data &&
      `http://localhost:1337${images?.data[0]?.attributes?.url}`) ||
    '/images/product-dummy.png';

  const handleFavorite = () => {
    if (favorite) {
      setFavorite(false);
    } else {
      setFavorite(true);
    }
  };
  const avarageReview = ratings?.data?.reduce(
    (acc, cur) => acc + Number(cur.attributes.rate),
    0
  );
  const authUser = useSelector((state) => state?.auth?.user);
  const [min, max] =
    variants?.data?.reduce(
      ([prevMin, prevMax], { attributes }) => [
        Math.min(prevMin, attributes?.price),
        Math.max(prevMax, attributes?.price)
      ],
      [Infinity, -Infinity]
    ) ?? [];

  return (
    <StyledBox>
      <Link href={`/books/${bookId}`} sx={{ cursor: 'pointer' }}>
        <Box sx={{ cursor: 'pointer' }}>
          <CustomImage
            src={bookImage}
            height="350px"
            title="comic-book"
            width="250px"
          />
        </Box>
      </Link>
      <ContentContainerStyle>
        <TitleStyle>
          <Link href={`/books/${bookId}`}>
            <Typography variant="h3" color="text.primary" py="5px">
              {book?.name}
            </Typography>
          </Link>
        </TitleStyle>

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="caption">by</Typography>
          <Link href={`/authors/${authors?.data[0]?.id}`}>
            <WriterLinkStyle>
              <Typography variant="body2">
                {authors?.data[0]?.attributes?.name}
              </Typography>
            </WriterLinkStyle>
          </Link>
        </Stack>
        {ratings?.data?.length > 0 && (
          <Stack direction="row" alignItems="center" pb={1}>
            <Rating
              defaultValue={avarageReview}
              precision={0.5}
              readOnly
              size="small"
            />
            <Typography variant="body2">({ratings?.data?.length})</Typography>
          </Stack>
        )}

        <Typography
          variant="caption"
          sx={{ color: 'text.secondary', margin: '5px 0' }}
        >
          {status}
        </Typography>
        <PriceStyle direction="row" alignItems="center">
          {variants?.data[0]?.attributes?.price === null ? (
            <Typography variant="h4">Free</Typography>
          ) : (
            <Typography variant="h4">
              ${min} - ${max}
            </Typography>
          )}

          {variants?.data[0]?.attributes?.old_price && (
            <Typography variant="h5">
              ${variants?.data[0]?.attributes?.old_price}
            </Typography>
          )}
        </PriceStyle>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Link
            href={`${authUser ? `/books/${bookId}` : ''}`}
            sx={{ cursor: 'pointer' }}
          >
            <CartBtnStyle>
              <FaShoppingCart /> Cart
            </CartBtnStyle>
          </Link>

          <StyledFav onClick={handleFavorite}>
            {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </StyledFav>
        </Stack>
      </ContentContainerStyle>
      {variants?.data[0]?.attributes?.discount && (
        <DiscountLabelStyle>
          {variants?.data[0]?.attributes?.discount}%
        </DiscountLabelStyle>
      )}
    </StyledBox>
  );
}

export default BookCard;
