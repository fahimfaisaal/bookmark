import { Link } from "@mui/material";
import { Box, styled } from "@mui/system";
import myShadows from "../../src/theme/shadows";

export const ContainerStyle = styled(Box)(({ theme }) => ({
  boxShadow: `${myShadows.box}`,
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "20px",
}));

export const LogoContainer = styled(Box)(() => ({
  img: {
    width: "70px",
    height: "70px",
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
  },
}));

export const LinkContainer = styled(Link)(({ theme }) => ({
  cursor: "pointer",
  fontSize: "17px",
  padding: "0 4px",
  color: `${theme.palette.text.secondary}`,
  "&:hover": {
    color: `${theme.palette.primary.main}`,
  },
}));
