import { Box, styled } from "@mui/system";

export const ImageContainerStyle = styled(Box)(({ theme }) => ({
  width: "150px",
  height: "180px",
  img: {
    borderRadius: "10px",
  },
}));
