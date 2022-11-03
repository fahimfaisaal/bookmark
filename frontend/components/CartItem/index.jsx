import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { IoIosClose } from 'react-icons/io';
import {
  ImgContainerStyle,
  ItemContainerStyle,
  PriceContainerStyle,
  RemoveBtnContanerStyle,
  TotalPriceContainerStyle,
} from './Styles';
import VerticalQuantityBtn from './VerticalQuntityBtn';
const CartItem = ({ cart }) => {
  const {book, variant} = cart
  return (
    <ItemContainerStyle
      direction={'row'}
      spacing={2}
      justifyContent={'space-between'}
    >
      <VerticalQuantityBtn quantity={cart?.quantity} />
      {/* <ImgContainerStyle>
        <img src="images/book-1.jpg" alt="" height={70} width={60} />
      </ImgContainerStyle> */}
      <Stack direction={'column'} spacing={2}>
        <Typography variant="h3">{book?.data?.attributes?.name}</Typography>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <PriceContainerStyle variant="body1"> ${variant?.data?.attributes?.price}</PriceContainerStyle>
          {/* <TotalPriceContainerStyle variant="body1">
            ${variant?.data?.attributes?.price}
          </TotalPriceContainerStyle> */}
        </Stack>
      </Stack>
      <RemoveBtnContanerStyle>
        <IoIosClose />
      </RemoveBtnContanerStyle>
    </ItemContainerStyle>
  );
};

export default CartItem;
