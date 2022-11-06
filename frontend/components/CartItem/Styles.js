import { Box, Typography } from '@mui/material';
import { Stack, styled } from '@mui/system';

export const ItemContainerStyle = styled(Stack)(() => ({
  alignItems: 'center'
}));

export const ImgContainerStyle = styled(Box)(({ theme }) => ({
  padding: '0 10px',
  background: `${theme.palette.background.default}`
}));

export const PriceContainerStyle = styled(Typography)(({ theme }) => ({
  fontWeight: '600',
  color: `${theme.palette.primary.main}`
}));
export const TotalPriceContainerStyle = styled(Typography)(() => ({
  fontWeight: '600'
}));

export const RemoveBtnContanerStyle = styled(Box)(({ theme }) => ({
  fontSize: '25px',
  color: `${theme.palette.text.secondary}`,
  cursor: 'pointer',
  display: 'flex',
  height: '30px',
  width: '30px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100%',
  '&:hover': {
    background: `${theme.palette.background.default}`,
    color: `${theme.palette.error.main}`
  }
}));
