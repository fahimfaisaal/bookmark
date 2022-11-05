import styled from '@emotion/styled';
import { Button, Card, Typography } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'space-between',
  padding: '18px',
  margin: '5px'
}));
export const StyledDate = styled(Typography)(({ theme }) => ({
  fontSize: '10px',
  marginTop: '20px'
}));
export const StyledContainer = styled(Button)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.dark}`,
  color: `${theme.palette.common.white}`,
  width: '5px',
  fontSize: '12px',
  display: 'flex',
  gap: '3px',
  borderRadius: '20px',
  border: `2px solid ${theme.palette.background.dark}`,
  padding: '5px 2px'
}));
