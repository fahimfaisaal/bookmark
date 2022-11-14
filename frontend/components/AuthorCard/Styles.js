import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const ImgContainerStyle = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '188px',
  height: '188px',
  borderRadius: '50%',
  boxShadow: 'rgba(0,0,0,0.16) 0px 3px 6px',
  img: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50%'
  }
}));
