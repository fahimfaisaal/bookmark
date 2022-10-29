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
} from './Styles';

const BookCard = ({
  title,
  img,
  price,
  author,
  category,
  stock,
  salePrice,
}) => {
  const [favorite, setFavorite] = React.useState(false);

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
          sx={{ color: 'text.secondary', margin: '5px 0' }}
        >
          Stock: 25 pcs left
        </Typography>
        <PriceStyle direction={'row'} alignItems={'center'}>
          <Typography variant="h4">$300.00</Typography>
          <Typography variant="h5">$330.00</Typography>
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
      <DiscountLabelStyle>10%</DiscountLabelStyle>
    </StyledBox>
  );
};

export default BookCard;
