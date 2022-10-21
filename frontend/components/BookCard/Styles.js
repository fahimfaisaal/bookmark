import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
  minHeight: '430px',
  width: '280px',
  border: '1px solid #E5E7EB',
  boxShadow: `${theme.myShadows}`,
  borderRadius: '6px',
  padding: '10px',
}));

export const StyledContainer = styled(Button)(({ theme }) => ({
  fontSize: '12px',
  display: 'flex',
  gap: '3px',
  borderRadius: '20px',
  border: `2px solid ${theme.palette.background.dark}`,
  padding: '6px 20px',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.dark}`,
    color: `${theme.palette.common.white}`,
  },
}));

export const StyledFav = styled(Button)(({ theme }) => ({
  width: '5px',
  height: '30px',
  color: `orange`,
  fontSize: '14px',
  borderRadius: '5px',
}));
