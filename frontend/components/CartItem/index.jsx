import React from "react";
import VerticalQuantityBtn from "./VerticalQuntityBtn";

const CartItem = ({ quantity, price, title }) => {
  return (
    <div>
      <VerticalQuantityBtn />
    </div>
  );
};

export default CartItem;
