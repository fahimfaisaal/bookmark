import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';

export const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundImage: 'linear-gradient(to right, #ABCBFC , #98F7D1)',
  borderRadius: '15px',
  padding: '4rem',
  marginTop: '10px',
  [theme.breakpoints.down('sm')]: {
    padding: '2rem'
  }
}));
export const StyledGridItem = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  color: 'white'
}));
export const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.55rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.7rem'
  }
}));
