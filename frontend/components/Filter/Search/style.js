import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const IconContainer = styled(Box)(({ theme, fontSize }) => ({
  color: `${theme.palette.text.primary}`,
  // fontSize: "28px",
  fontSize: `${fontSize}`,
  cursor: 'pointer'
}));

export const SearchContainerStyle = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 20px'
}));
