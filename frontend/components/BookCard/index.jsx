import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { StyledBox, StyledContainer, StyledFav } from './Styles';
import { FaShoppingCart } from 'react-icons/fa';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const BookCard = ({
  title,
  img,
  price,
  author,
  category,
  stock,
  salePrice,
}) => {
  return (
    <StyledBox>
      <Image src="/Comic-Books.jpg" width={250} height={350} />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3" color="text.primary">
          Superhero & Aliens
        </Typography>
        <StyledFav>
          <FavoriteBorderIcon />
        </StyledFav>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="caption">by</Typography>
        <Typography variant="subtitle2">Brandon T.Trigg</Typography>
      </Stack>
      <Typography
        variant="caption"
        sx={{ color: 'text.secondary', margin: '5px 0' }}
      >
        Stock: 25 pcs left
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="caption" color="orange">
          $300.00
        </Typography>
        <StyledContainer>
          <FaShoppingCart /> Cart
        </StyledContainer>
      </Stack>
    </StyledBox>
  );
};

export default BookCard;
