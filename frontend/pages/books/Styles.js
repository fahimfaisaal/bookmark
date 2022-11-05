import { Button, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

export const BookInfoContainer = styled(Box)(() => ({
  margin: '30px 0 50px'
}));

export const BookImagesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  background: `${theme.palette.background.paper}`,
  padding: '12%',
  position: 'relative'
}));

export const ImgListItem = styled(Box)(({ theme, active }) => ({
  height: '130px',
  width: '100px',
  backgroundColor: `${theme.palette.background.dark}`,
  padding: '10px',
  cursor: 'pointer',
  border: `${active ? `3px solid ${theme.palette.grey[500]}` : null}`
}));
export const ImgListContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  overflowX: 'auto'
}));

export const BookDetailsContainer = styled(Box)(() => ({
  padding: '0px 10px 10px'
}));

export const BookTitleStyle = styled(Typography)(() => ({
  fontSize: '30px',
  fontWeight: '700'
}));

export const FavIconStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px',
  height: '50px',
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: '50%',
  cursor: 'pointer',
  color: `${theme.palette.primary.main}`
}));

export const AuthorLinkStyle = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  transition: 'all 0.4s',
  '&:hover': {
    color: `${theme.palette.action.hover}`
  }
}));

export const BookPriceStyle = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.primary.main}`
  // padding: '30px 0',
}));
export const OldBookPriceStyle = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.grey[600]}`,
  textDecoration: 'line-through'
}));

export const VariantBtnStyle = styled(Button)(({ theme, active }) => ({
  backgroundColor: `${theme.palette.background.dark}`,
  border: active
    ? `2px solid ${theme.palette.primary.main}`
    : `2px solid ${theme.palette.grey[300]}`,
  color: `${theme.palette.text.primary}`,
  '&:hover': {
    border: `2px solid ${theme.palette.primary.main}`
  }
}));

const commonStyles = (theme) => ({
  border: `1px solid ${theme.palette.grey[400]}`,
  fontSize: '26px',
  transition: 'all 0.3s'
});

export const QtyBtnLeft = styled(Box)(({ theme }) => ({
  padding: '4px 25px',
  ...commonStyles(theme),
  cursor: 'pointer',
  borderRadius: '5px 0 0 5px',
  '&:hover': {
    borderColor: `${theme.palette.primary.main}`
  }
}));

export const QtyBtnRight = styled(Box)(({ theme }) => ({
  padding: '4px 25px',
  ...commonStyles(theme),
  cursor: 'pointer',
  borderRadius: '0 5px 5px 0',
  '&:hover': {
    borderColor: `${theme.palette.primary.main}`
  }
}));
export const Qty = styled(Box)(({ theme }) => ({
  padding: '10px 32px',
  ...commonStyles(theme),
  fontSize: '18px',
  borderLeft: 'none',
  borderRight: 'none'
}));
