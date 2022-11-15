import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import {
  useDeleteCartMutation,
  useUpdateCartMutation
} from '../../store/features/carts/cartsApi';
import CustomImage from '../CustomImage';
import {
  ImgContainerStyle,
  ItemContainerStyle,
  PriceContainerStyle,
  RemoveBtnContanerStyle
} from './Styles';
import VerticalQuantityBtn from './VerticalQuntityBtn';

function CartItem({ cart, cartId }) {
  const { book, variant } = cart;
  const [deleteCart] = useDeleteCartMutation();

  const [cartQty, setCartQty] = useState(cart?.quantity);
  const [updateCart] = useUpdateCartMutation();

  const itemIncrement = () => {
    // based on stock
    setCartQty((prev) => prev + 1);
  };
  const itemDecrement = () => {
    if (cartQty > 0) setCartQty((prev) => prev - 1);
  };

  const url = cart?.cartThumbnail || '/images/product-dummy.png';

  useEffect(() => {
    if (cartQty !== cart?.quantity) {
      const data = {};
      data.quantity = cartQty;
      if (data.quantity <= 0) {
        deleteCart({ cartId });
      } else {
        updateCart({ cartId, data });
      }
    }
  }, [cartQty]);

  const deleteCartItem = (cartId) => {
    deleteCart({ cartId });
  };

  return (
    <ItemContainerStyle
      direction="row"
      spacing={2}
      justifyContent="space-between"
    >
      <VerticalQuantityBtn
        quantity={cart?.quantity}
        itemDecrement={itemDecrement}
        itemIncrement={itemIncrement}
        cartQty={cartQty}
      />
      <ImgContainerStyle>
        <CustomImage
          src={url}
          alt={book?.data?.attributes?.name}
          height={20}
          width={30}
        />
      </ImgContainerStyle>
      <Stack direction="column" spacing={2}>
        <Typography variant="h3">{book?.data?.attributes?.name}</Typography>
        <Stack direction="row" justifyContent="space-between">
          <PriceContainerStyle variant="body1">
            {' '}
            ${variant?.data?.attributes?.price}
          </PriceContainerStyle>

          {/* <TotalPriceContainerStyle variant="body1">
            ${variant?.data?.attributes?.price}
          </TotalPriceContainerStyle> */}
        </Stack>
      </Stack>
      <RemoveBtnContanerStyle onClick={() => deleteCartItem(cartId)}>
        <IoIosClose />
      </RemoveBtnContanerStyle>
    </ItemContainerStyle>
  );
}

export default CartItem;
