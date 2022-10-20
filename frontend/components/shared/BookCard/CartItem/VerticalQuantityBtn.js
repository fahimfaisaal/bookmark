import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

const ContainerStyle = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.background,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "15px",
  padding: "5px 20px",
  width: "30px",
  background: `${theme.palette.primary.main}`,
  color: "red",
}));

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
