import { Link } from '@mui/material';
import { styled } from '@mui/system';

export const LinkContainer = styled(Link)(({ theme }) => ({
  margin: 0,
  padding: 0,
  marginBottom: '15px',
  color: `${theme.palette.text.primary}`,
  fontSize: '16px',
  fontWeight: '400',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    color: `${theme.palette.text.third}`
  }
}));
