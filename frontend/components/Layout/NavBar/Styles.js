import { AppBar, Link, List, Switch, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

const barStyle = (theme) => {
  return {
    backgroundColor: `${theme.palette.background.default}`,
    boxShadow: `${theme.shadows[1]}`,
    padding: '20px 50px',
  };
};

export const AppBarContainer = styled(AppBar)(({ theme }) => ({
  ...barStyle(theme),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const MobileBarContainer = styled(AppBar)(({ theme }) => ({
  ...barStyle(theme),
  padding: '10px 30px',
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}));

export const MobileMenuContainer = styled(Box)(({ theme }) => ({
  ...barStyle(theme),
  padding: '15px 10px',
  display: 'none',
  width: '100%',
  position: 'fixed',
  bottom: '0px',
  left: '0px',
  color: `${theme.palette.text.primary}`,
  fontSize: '28px',
  zIndex: '99',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

export const LogoContainer = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  img: {
    width: '180px',
    height: '30px',
  },
}));

export const LinkContainer = styled(Link)(({ theme, additional, active }) => ({
  margin: 0,
  padding: 0,
  color: `${active ? theme.palette.action.hover : theme.palette.text.primary}`,
  fontSize: '17px',
  fontWeight: '450',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    color: `${theme.palette.action.hover}`,
  },
  display: additional ? 'none' : '',
  [theme.breakpoints.down('lg')]: {
    display: additional ? 'block' : '',
  },
}));

export const SearchContainer = styled(Box)(({ theme, normal, width }) => ({
  background: `${theme.palette.background.dark}`,
  border: `1px solid ${theme.palette.background.dark}`,
  borderRadius: '7px',
  padding: '8px 15px',
  display: 'flex',
  alignItems: 'center',
  svg: {
    color: `${theme.palette.text.secondary}`,
    fontSize: '22px',
    cursor: 'pointer',
    marginRight: '10px',
    '&:hover': {
      color: `${theme.palette.action.hover}`,
    },
  },
  input: {
    width: '250px',
    '&:focus': {
      // color: `${theme.palette.primary.main}`,
    },
  },
  [theme.breakpoints.down('lg')]: {
    display: `${normal ? 'none' : ''}`,
  },
}));

export const ThemeSwitchStyle = styled(Box)(({ theme }) => ({
  marginTop: '5px',
  svg: {
    fontSize: '28px',
    color: `${theme.palette.mode === 'dark' ? '#FFF' : ''}`,
  },
}));

export const IconContainer = styled(Box)(({ theme, fontSize }) => ({
  color: `${theme.palette.text.primary}`,
  // fontSize: "28px",
  fontSize: `${fontSize}`,
  cursor: 'pointer',
}));

export const MenuItemContainer = styled(Typography)(() => ({
  '&:hover': {
    color: '#fff',
  },
}));

export const CartContainer = styled(Box)(({ theme }) => ({
  width: '500px',
  background: `${theme.palette.background.default}`,
  maxHeight: '100vh',
  overflow: 'auto',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const CartHeaderContainer = styled(Box)(({ theme }) => ({
  padding: '20px 25px',
  color: `${theme.palette.primary.main}`,
}));

export const CartItemContainer = styled(Box)(() => ({
  padding: '20px 25px',
}));

export const CloseBtnContaner = styled(Box)(({ theme }) => ({
  fontSize: '28px',
  color: `${theme.palette.text.primary}`,
  background: `${theme.palette.background.dark}`,
  cursor: 'pointer',
  display: 'flex',
  height: '35px',
  width: '35px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100%',
  transition: 'all 0.4s',
  '&:hover': {
    background: `${theme.palette.primary.main}`,
    color: '#fff',
  },
}));

export const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

export const MobMenuItemContainer = styled(Box)(() => ({
  cursor: 'pointer',
}));

export const MenuContainer = styled(Box)(({ theme }) => ({
  width: '470px',
  background: `${theme.palette.background.default}`,
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const MenuHeaderContiner = styled(Box)(() => ({
  padding: '20px 25px',
}));

export const MenuListContainer = styled(List)(() => ({
  padding: '15px 25px',
}));

export const MenuLinkContainer = styled(Link)(({ theme, active }) => ({
  cursor: 'pointer',
  color: `${active ? theme.palette.action.hover : theme.palette.text.primary}`,
  fontSize: '16px',
  fontWeight: '450',
  textDecoration: 'none',
  transition: 'all .4s',
  padding: '5px 0',
  '&:hover': {
    color: `${theme.palette.action.hover}`,
  },
}));

export const MiniTopBarContainer = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.background.default}`,
  boxShadow: `${theme.shadows[2]}`,
  padding: '10px 10px',
  display: 'none',
  width: '100%',
  position: 'fixed',
  top: '60px',
  left: '0px',
  color: `${theme.palette.text.primary}`,
  zIndex: '99',
  fontSize: '30px',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));
