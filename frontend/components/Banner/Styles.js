import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const StyledGrid = styled(Grid)(() => ({
  backgroundImage: 'linear-gradient(to right, #ABCBFC , #98F7D1)',
  borderRadius: '15px',
  padding: '50px'
}));
export const StyledGridItem = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white'
}));
