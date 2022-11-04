import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import useDebounce from "../../hooks/useDebounce";
import {
  useDeleteCartMutation,
  useUpdateCartMutation,
} from "../../store/features/carts/cartsApi";
import {
  ImgContainerStyle,
  ItemContainerStyle,
  PriceContainerStyle,
  RemoveBtnContanerStyle,
  TotalPriceContainerStyle,
} from "./Styles";
import VerticalQuantityBtn from "./VerticalQuntityBtn";
const CartItem = ({ cart, cartId }) => {
  const { book, variant } = cart;
  const debounce = useDebounce();
  const [cartItem, setCartItem] = useState();
  const [deleteCart] = useDeleteCartMutation();

  const [cartQty, setCartQty] = useState(cart?.quantity);
  const [updateCart, { data: updateCartData, error: updateCartError }] =
    useUpdateCartMutation();

  const itemIncrement = () => {
    // based on stock
    setCartQty((prev) => prev + 1);
  };
  const itemDecrement = () => {
    if (cartQty > 0) setCartQty((prev) => prev - 1);
  };

  useEffect(() => {
    if (cartQty !== cart?.quantity) {
      let data = {};
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
      direction={"row"}
      spacing={2}
      justifyContent={"space-between"}
    >
      <VerticalQuantityBtn
        quantity={cart?.quantity}
        itemDecrement={itemDecrement}
        itemIncrement={itemIncrement}
        cartQty={cartQty}
      />
      <ImgContainerStyle>
        <img src="/images/book-1.jpg" alt="" height={70} width={60} />
      </ImgContainerStyle>
      <Stack direction={"column"} spacing={2}>
        <Typography variant="h3">{book?.data?.attributes?.name}</Typography>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <PriceContainerStyle variant="body1">
            {" "}
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
};

export default CartItem;
