import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const SearchContainer = styled(Box)(({ theme, normal, width }) => ({
  background: `${theme.palette.background.dark}`,
  border: `1px solid ${theme.palette.background.dark}`,
  borderRadius: '7px',
  padding: '8px 15px',
  display: 'flex',
  alignItems: 'center',
  width: `${width}`,
  svg: {
    color: `${theme.palette.text.secondary}`,
    fontSize: '22px',
    cursor: 'pointer',
    marginRight: '10px',
    '&:hover': {
      color: `${theme.palette.action.hover}`,
    },
  },
  [theme.breakpoints.down('lg')]: {
    display: `${normal ? 'none' : ''}`,
  },
}));
