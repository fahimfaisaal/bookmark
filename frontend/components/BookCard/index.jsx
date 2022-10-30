import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CustomImage from '../CustomImage';

import {
  CartBtnStyle,
  ContentContainerStyle,
  DiscountLabelStyle,
  PriceStyle,
  StyledBox,
  StyledFav,
  TitleStyle,
  WriterLinkStyle,
} from "./Styles";

const BookCard = ({ book }) => {
  const [favorite, setFavorite] = React.useState(false);
  const { authors, images, variants } = book;
  // const { price, discount} = variants?.data[0]
  // console.log({ book: variants?.data[0]?.attributes?.discount, variants });
  const bookImage =
    (images?.data &&
      `http://localhost:1337${images?.data[0]?.attributes?.url}`) ||
    "/images/author-dummy.png";

  const handleFavorite = () => {
    if (favorite) {
      setFavorite(false);
    } else {
      setFavorite(true);
    }
  };

  return (
    <StyledBox>
      <Link href="/books/123" sx={{ cursor: 'pointer' }}>
        <Box sx={{ cursor: 'pointer' }}>
          <CustomImage
            src="/Comic-Books.jpg"
            height="350px"
            title="comic-book"
            width="250px"
          />
        </Box>
      </Link>
      <ContentContainerStyle>
        <TitleStyle>
          <Link href={'/books/123'}>
            <Typography variant="h3" color="text.primary" py={'5px'}>
              Superhero & Aliens Superhero Aliens
            </Typography>
          </Link>
        </TitleStyle>

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="caption">by</Typography>
          <Link href={'/authors/123'}>
            <WriterLinkStyle>
              <Typography variant="body2">Brandon T.Trigg</Typography>
            </WriterLinkStyle>
          </Link>

        </Stack>
        <Typography
          variant="caption"
          sx={{ color: "text.secondary", margin: "5px 0" }}
        >
          Stock: 25 pcs left
        </Typography>
        <PriceStyle direction={"row"} alignItems={"center"}>
          {variants?.data[0]?.attributes?.price == null ? (
            <Typography variant="h4">
              Free
            </Typography>
          ) : (
            <Typography variant="h4">
              ${variants?.data[0]?.attributes?.price}
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
          <CartBtnStyle>
            <FaShoppingCart /> Cart
          </CartBtnStyle>
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
};

export default BookCard;
