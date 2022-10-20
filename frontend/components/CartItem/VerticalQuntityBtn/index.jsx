import { BtnContainerStyle, ContainerStyle, QntContainerStyle } from "./Styles";

const VerticalQuantityBtn = () => {
  return (
    <ContainerStyle>
      <BtnContainerStyle variant="button">+</BtnContainerStyle>
      <QntContainerStyle variant="button">1</QntContainerStyle>
      <BtnContainerStyle variant="button">-</BtnContainerStyle>
    </ContainerStyle>
  );
};

export default VerticalQuantityBtn;
