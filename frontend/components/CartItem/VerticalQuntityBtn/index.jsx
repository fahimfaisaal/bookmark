import { BtnContainerStyle, ContainerStyle, QntContainerStyle } from './Styles';

function VerticalQuantityBtn({ itemIncrement, itemDecrement, quantity }) {
  return (
    <ContainerStyle>
      <BtnContainerStyle variant="button" onClick={itemIncrement}>
        +
      </BtnContainerStyle>
      <QntContainerStyle variant="button">{quantity}</QntContainerStyle>
      <BtnContainerStyle variant="button" onClick={itemDecrement}>
        -
      </BtnContainerStyle>
    </ContainerStyle>
  );
}

export default VerticalQuantityBtn;
