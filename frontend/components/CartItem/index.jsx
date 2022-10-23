import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { IoIosClose } from "react-icons/io";
import {
  ImgContainerStyle,
  ItemContainerStyle,
  PriceContainerStyle,
  RemoveBtnContanerStyle,
  TotalPriceContainerStyle,
} from "./Styles";
import VerticalQuantityBtn from "./VerticalQuntityBtn";
const CartItem = ({ quantity, price, title }) => {
  return (
    <ItemContainerStyle direction={"row"} spacing={2}>
      <VerticalQuantityBtn />
      <ImgContainerStyle>
        <img src="images/book-1.jpg" alt="" height={70} width={60} />
      </ImgContainerStyle>
      <Stack direction={"column"} spacing={2}>
        <Typography variant="h3">The Flying Man First Part</Typography>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <PriceContainerStyle variant="body1">$90.00</PriceContainerStyle>
          <TotalPriceContainerStyle variant="body1">
            $180.00
          </TotalPriceContainerStyle>
        </Stack>
      </Stack>
      <RemoveBtnContanerStyle>
        <IoIosClose />
      </RemoveBtnContanerStyle>
    </ItemContainerStyle>
  );
};

export default CartItem;
