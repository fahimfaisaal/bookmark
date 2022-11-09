import { Box, styled } from '@mui/system';

export const InnerContainerStyle = styled(Box)(({ style }) => ({
  width: '288px',
  padding: '0px 18px',
  ...style
}));

export const PriceRangeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  backgroundColor: `${theme.palette.background.dark}`,
  boxShadow: `${theme.shadows[2]}`,
  //   width: '133px',
  //   height: '58px',
  width: '100%',
  //   color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
  padding: '10px',
  borderRadius: 2,
  fontSize: '0.875rem',
  fontWeight: '700'
}));
