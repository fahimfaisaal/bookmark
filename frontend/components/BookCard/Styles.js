import styled from '@emotion/styled';
import { Box, Button, Link } from '@mui/material';
import { Stack } from '@mui/system';

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  justifyContent: 'space-between',
  height: '100%',
  border: '1px solid #E5E7EB',
  borderRadius: '6px',
  position: 'relative'
}));

export const CartBtnStyle = styled(Button)(({ theme }) => ({
  fontSize: '15px',
  display: 'flex',
  gap: '5px',
  justifyContent: 'space-between',
  borderRadius: '20px',
  border: `2px solid ${theme.palette.grey[300]}`,
  padding: '6px 20px',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.dark}`,
    color: `${theme.palette.common.white}`
  }
}));

export const StyledFav = styled(Box)(({ theme }) => ({
  color: `${theme.palette.text.third}`,
  fontSize: '20px',
  cursor: 'pointer',
  padding: '0 10px'
}));

export const DiscountLabelStyle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  left: '10px',
  background: `${theme.palette.text.third}`,
  color: '#fff',
  padding: '4px 12px 2px 14px',
  borderRadius: '15px',
  textAlign: 'center',
  boxShadow: `${theme.shadows[1]}`,
  zIndex: '9'
}));

export const FavIconStyle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  right: '10px',
  color: `${theme.palette.primary.main}`,
  fontSize: '20px',
  zIndex: '9',
  cursor: 'pointer',
  boxShadow: `${theme.shadows[1]}`
}));

export const ContentContainerStyle = styled(Box)(() => ({
  padding: '0px 12px 10px'
}));

export const TitleStyle = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  cursor: 'pointer',
  h3: {
    transition: 'all 0.4s',
    fontSize: '17px',
    '&:hover': {
      color: `${theme.palette.text.third}`
    }
  }
}));

export const WriterLinkStyle = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'pointer',
  p: {
    transition: 'all 0.4s',
    fontSize: '15px',
    padding: '5px 0',
    '&:hover': {
      color: `${theme.palette.text.third}`
    }
  }
}));

export const PriceStyle = styled(Stack)(({ theme }) => ({
  padding: '15px 0',
  h4: {
    fontSize: '18px',
    color: `${theme.palette.primary.main}`,
    marginRight: '15px'
  },
  h5: {
    fontSize: '16px',
    textDecoration: 'line-through',
    color: `${theme.palette.text.secondary}`
  }
}));
