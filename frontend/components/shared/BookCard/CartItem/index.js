import React from "react";
import VerticalQuantityBtn from "./verticalQuantityBtn";

const CartItem = ({ quantity, price, title }) => {
  return (
    <div>
      <VerticalQuantityBtn />
    </div>
  );
};

export default CartItem;
