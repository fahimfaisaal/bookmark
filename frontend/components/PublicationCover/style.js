import { Link, Stack, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

export const ContainerStyle = styled(Box)(({ theme }) => ({
  boxShadow: `${theme.shadows[2]}`,
  borderRadius: '5px',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between'
}));

export const ProfileContainerStyle = styled(Stack)(() => ({
  width: '30%'
}));

export const DetailsContainerStyle = styled(Box)(() => ({
  textAlign: 'center'
}));

export const BannerContainerStyle = styled(Box)(({ theme }) => ({
  width: '70%',
  background: `${theme.palette.background.paper}`,
  padding: '50px 0'
}));

export const LogoContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  img: {
    width: '130px',
    height: '130px',
    borderRadius: '50%'
  }
}));

export const LinkContainer = styled(Link)(({ theme, style }) => ({
  cursor: 'pointer',
  fontSize: '20px',
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 4px 18px 4px',
  // TODO: Need an optimal solution for this padding issue.
  color: `${theme.palette.text.secondary}`,
  '&:hover': {
    color: `${theme.palette.primary.main}`
  },
  ...style
}));

export const TitleStyle = styled(Typography)(() => ({
  padding: '20px',
  fontSize: '22px',
  fontWeight: '700'
}));
