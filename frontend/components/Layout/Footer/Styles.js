import { Link, Stack } from '@mui/material';
import { Box, styled } from '@mui/system';

export const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.paper}`,
  padding: '50px 60px 35px',
}));

export const PaymentImgContainer = styled(Link)(() => ({
  padding: '0 10px',
  cursor: 'pointer',
  img: {
    width: '65px',
    height: '25x',
  },
}));

export const FooterBottomContainer = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));
