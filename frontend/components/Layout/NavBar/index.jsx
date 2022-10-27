import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Link,
  ListItem,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tooltip,
  Typography,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/system';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineFilter } from 'react-icons/ai';
import { BiSearch, BiUser } from 'react-icons/bi';
import { CgMenuLeft, CgShoppingBag } from 'react-icons/cg';
import { HiOutlineShoppingBag, HiShoppingBag } from 'react-icons/hi';
import { IoIosClose } from 'react-icons/io';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { VscHome } from 'react-icons/vsc';
import { UseThemeContext } from '../../../context/ThemeContext';
import CartItem from '../../CartItem';
import SearchBar from '../../shared/SearchBar';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import {
  AppBarContainer,
  CartContainer,
  CartHeaderContainer,
  CartItemContainer,
  CloseBtnContaner,
  IconContainer,
  LinkContainer,
  LogoContainer,
  MenuContainer,
  MenuHeaderContiner,
  MenuItemContainer,
  MenuLinkContainer,
  MenuListContainer,
  MiniTopBarContainer,
  MobileBarContainer,
  MobileMenuContainer,
  MobMenuItemContainer,
  ThemeSwitch,
} from './Styles';
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const menuItems = [
  {
    link: '/books',
    text: 'Books',
  },
  {
    link: '/authors',
    text: 'Authors',
  },
  {
    link: '/publishers',
    text: 'Publishers',
  },
  {
    link: '/contact',
    text: 'Contact',
  },
  {
    link: '/about',
    text: 'About Us',
  },
];

const profileMenuItems = [
  {
    link: '/profile',
    text: 'Profile',
  },
  {
    link: '/orders',
    text: 'My Orders',
  },
  {
    link: '/wishlists',
    text: 'My Wishlists',
  },
  {
    link: '/checkout',
    text: 'Checkout',
  },
  {
    link: '/change-password',
    text: 'Change Password',
  },
  {
    link: '',
    text: 'Logout',
  },
];

const categoreyItems = [
  {
    link: '',
    text: 'Comic books',
  },
  {
    link: '',
    text: ' Science Fiction',
  },
  {
    link: '',
    text: 'Literature',
  },
  {
    link: '',
    text: 'Childrens',
  },
  {
    link: '',
    text: 'Literature',
  },
  {
    link: '',
    text: 'Horror Fiction',
  },
];

// const SearchBar = ({
//   normal = false,
//   placeholder = 'Search Books (at least 3 char)',
//   width,
// }) => {
//   const theme = useTheme();
//   const [focus, setFocus] = useState(false);
//   const handleOnFocus = () => {
//     setFocus(true);
//   };
//   const handleOnBlur = () => {
//     setFocus(false);
//   };

//   return (
//     <SearchContainer
//       sx={
//         focus
//           ? { border: `1px solid ${theme.palette.primary.main}` }
//           : { border: `1px solid ${theme.palette.background.dark}` }
//       }
//       normal={normal}
//       width={width}
//     >
//       <BiSearch />
//       <InputBase
//         placeholder={placeholder}
//         onFocus={handleOnFocus}
//         onBlur={handleOnBlur}
//       />
//     </SearchContainer>
//   );
// };

const Drawer = ({ anchor, data, open, toggle }) => {
  return (
    <SwipeableDrawer
      anchor={anchor}
      open={open}
      onClose={toggle(false)}
      onOpen={toggle(true)}
    >
      <MenuContainer role="presentation">
        <MenuHeaderContiner>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Link href="/">
              <img src="/images/logo-1.png" alt="" width={180} height={30} />
            </Link>
            <Box>
              <CloseBtnContaner onClick={toggle(false)}>
                <IoIosClose />
              </CloseBtnContaner>
            </Box>
          </Stack>
        </MenuHeaderContiner>
        <Divider />

        <MenuListContainer>
          {data.map((item) => (
            <ListItem key={item.text}>
              <MenuLinkContainer href={item.link}>
                {item.text}
              </MenuLinkContainer>
            </ListItem>
          ))}
        </MenuListContainer>
      </MenuContainer>
    </SwipeableDrawer>
  );
};

const NavBar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { handleChangeMode } = UseThemeContext();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [cartModalTrg, setCartModalTrig] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setCartModalTrig(open);
  };

  const [serachTrig, setSearchTrig] = useState(false);

  const toggleSearch = () => {
    setSearchTrig(true);
  };

  const [mobMenuTrig, setMobMenuTrig] = useState(false);

  const toggleMenuDraw = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setMobMenuTrig(open);
  };
  const [profileMenuTrig, setProfileMenuTrig] = useState(false);

  const toggleProfileDraw = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setProfileMenuTrig(open);
  };
  const [filterMenuTrig, setFilterMenuTrig] = useState(false);

  const toggleFilterDraw = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setFilterMenuTrig(open);
  };

  const [mobSearchTrig, setMobSearchTrig] = useState(false);

  const handleSearchToggle = () => {
    if (mobSearchTrig) {
      setMobSearchTrig(false);
    } else {
      setMobSearchTrig(true);
    }
  };

  const router = useRouter();

  const handleHome = () => {
    router.push('/');
  };

  const [openLogin, setOpenLogin] = useState(false);

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const [openRegister, setOpenRegister] = useState(false);

  const handleClickOpenRegister = () => {
    setOpenRegister(true);
  };

  const handleCloseRegister = () => {
    setOpenRegister(false);
  };

  return (
    <>
      <AppBarContainer position="fixed">
        <Stack
          direction={'row'}
          spacing={2}
          alignItems="center"
          justifyContent={'space-between'}
        >
          <Link href="/">
            <LogoContainer marginTop={'8px'}>
              <img src="/images/logo-1.png" alt="" />
            </LogoContainer>
          </Link>
          {!serachTrig ? (
            <Stack direction={'row'} spacing={2} alignItems="center">
              {menuItems.map((item) => (
                <LinkContainer href={item.link} key={item.text}>
                  {item.text}
                </LinkContainer>
              ))}
              <LinkContainer additional={true} onClick={toggleSearch}>
                Search
              </LinkContainer>
            </Stack>
          ) : (
            <SearchBar normal={false} />
          )}
          <SearchBar normal={true} />
          <IconContainer>
            <ThemeSwitch onChange={handleChangeMode} />
          </IconContainer>
          <IconContainer fontSize={'28px'} onClick={toggleDrawer(true)}>
            <Badge badgeContent={4} color="primary">
              <HiOutlineShoppingBag />
            </Badge>
          </IconContainer>
          <IconContainer fontSize={'32px'}>
            <Badge badgeContent={2} color="primary">
              {/* <MdFavorite /> */}
              <MdOutlineFavoriteBorder />
            </Badge>
          </IconContainer>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: '45px',
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItemContainer key={setting}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                </MenuItemContainer>
              ))}
            </Menu>
          </Box>
          <Box>
            <Button
              variant="contained"
              disableElevation={true}
              onClick={handleClickOpenLogin}
            >
              Join
            </Button>
          </Box>
        </Stack>

        <SwipeableDrawer
          anchor={'right'}
          open={cartModalTrg}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <CartContainer role="presentation">
            <CartHeaderContainer>
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Stack direction={'row'} alignItems={'center'}>
                  <HiShoppingBag fontSize={'24px'} />
                  <Typography variant="h4" fontSize={'18px'} px={'10px'}>
                    2 Item
                  </Typography>
                </Stack>
                <Box>
                  <CloseBtnContaner onClick={toggleDrawer(false)}>
                    <IoIosClose />
                  </CloseBtnContaner>
                </Box>
              </Stack>
            </CartHeaderContainer>
            <Divider />

            <CartItemContainer>
              <CartItem />
            </CartItemContainer>
            <Divider />
            <CartItemContainer>
              <CartItem />
            </CartItemContainer>
            <Divider />
          </CartContainer>
        </SwipeableDrawer>
      </AppBarContainer>

      <MobileBarContainer position="fixed">
        <Stack
          direction={'row'}
          spacing={2}
          alignItems="center"
          justifyContent={'center'}
        >
          {mobSearchTrig ? (
            <SearchBar normal={false} />
          ) : (
            <Link href="/">
              <LogoContainer marginTop={'8px'}>
                <img src="/images/logo-1.png" alt="" />
              </LogoContainer>
            </Link>
          )}
        </Stack>
      </MobileBarContainer>
      <MiniTopBarContainer>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box>
            <Button variant="outlined" onClick={toggleFilterDraw(true)}>
              <AiOutlineFilter />
              <Typography variant="h4" marginLeft={'5px'}>
                Filter
              </Typography>
            </Button>
          </Box>
          <Box>
            <ThemeSwitch onChange={handleChangeMode} />
          </Box>
        </Stack>

        <Drawer
          anchor={'left'}
          open={filterMenuTrig}
          toggle={toggleFilterDraw}
          data={categoreyItems}
        />
      </MiniTopBarContainer>

      <MobileMenuContainer position="fexed">
        <Stack
          direction={'row'}
          spacing={2}
          alignItems="center"
          justifyContent={'space-between'}
        >
          <MobMenuItemContainer onClick={toggleMenuDraw(true)}>
            <CgMenuLeft />
          </MobMenuItemContainer>

          <MobMenuItemContainer onClick={handleSearchToggle}>
            <BiSearch />
          </MobMenuItemContainer>

          <MobMenuItemContainer onClick={handleHome}>
            <VscHome />
          </MobMenuItemContainer>

          <MobMenuItemContainer onClick={toggleDrawer(true)}>
            <Badge badgeContent={2} color="primary">
              <CgShoppingBag />
            </Badge>
          </MobMenuItemContainer>

          <MobMenuItemContainer onClick={toggleProfileDraw(true)}>
            <BiUser />
          </MobMenuItemContainer>
        </Stack>

        <Drawer
          anchor={'left'}
          open={mobMenuTrig}
          toggle={toggleMenuDraw}
          data={menuItems}
        />
        <Drawer
          anchor={'right'}
          open={profileMenuTrig}
          toggle={toggleProfileDraw}
          data={profileMenuItems}
        />
      </MobileMenuContainer>

      <Login
        open={openLogin}
        handleClickOpen={handleClickOpenRegister}
        handleClose={handleCloseLogin}
      />
      <Register
        open={openRegister}
        handleClickOpen={handleClickOpenLogin}
        handleClose={handleCloseRegister}
      />
    </>
  );
};

export default NavBar;
