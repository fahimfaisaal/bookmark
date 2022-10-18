import { Box, styled } from "@mui/system";

export const ContainerStyle = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.background,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "20px",
  padding: "10px 20px",
  width: "30px",
  background: `${theme.palette.background.default}`,
}));
