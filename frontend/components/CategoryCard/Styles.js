import { Box, styled } from '@mui/system';

export const ImageContainerStyle = styled(Box)(({ theme }) => ({
  width: '170px',
  height: '205px',
  img: {
    borderRadius: '10px'
  }
}));
