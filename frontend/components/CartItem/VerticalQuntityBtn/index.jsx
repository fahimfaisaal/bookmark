import { Typography } from "@mui/material";
import { ContainerStyle } from "./Styles";

const VerticalQuantityBtn = () => {
  return (
    <ContainerStyle>
      <Typography variant="button">+</Typography>
      <Typography variant="body1">1</Typography>
      <Typography variant="button">-</Typography>
    </ContainerStyle>
  );
};

export default VerticalQuantityBtn;
