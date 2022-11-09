import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.default}`,
  boxShadow:
    'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
  marginRight: '20px',
  padding: '20px',
  [theme.breakpoints.down('md')]: {
    marginBottom: '10px'
  }
}));
