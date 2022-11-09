import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

export const ReviewPointStyle = styled(Box)(({ theme }) => ({
  background: `${theme.palette.primary.main}`,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '5px 15px',
  borderRadius: '20px',
  h2: {
    color: '#fff',
    marginRight: '5px'
  },
  h3: {
    color: '#fff',
    marginTop: '4px'
  }
}));

export const IconMenuContainer = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    color: `${theme.palette.action.hover}`
  }
}));
