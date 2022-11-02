import { BtnContainerStyle, ContainerStyle, QntContainerStyle } from "./Styles";

const VerticalQuantityBtn = ({itemIncrement, itemDecrement, cartQty}) => {
  return (
    <ContainerStyle>
      <BtnContainerStyle variant="button" onClick={itemIncrement} >+</BtnContainerStyle>
      <QntContainerStyle variant="button">{cartQty}</QntContainerStyle>
      <BtnContainerStyle variant="button" onClick={itemDecrement} >-</BtnContainerStyle>

    </ContainerStyle>
  );
};

export default VerticalQuantityBtn;
