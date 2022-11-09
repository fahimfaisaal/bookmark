import { Box, styled } from '@mui/system';

export const InnerContainerStyle = styled(Box)(() => ({
  width: '288px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

export const ListContainerStyle = styled(Box)(() => ({
  height: '250px',
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: '7px'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: '10rem',
    border: '1px solid #fff'
  }
}));
