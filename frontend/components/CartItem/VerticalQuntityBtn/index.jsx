import { BtnContainerStyle, ContainerStyle, QntContainerStyle } from "./Styles";

const VerticalQuantityBtn = ({quantity}) => {
  return (
    <ContainerStyle>
      <BtnContainerStyle variant="button">+</BtnContainerStyle>
      <QntContainerStyle variant="button">{quantity}</QntContainerStyle>
      <BtnContainerStyle variant="button">-</BtnContainerStyle>
    </ContainerStyle>
  );
};

export default VerticalQuantityBtn;
