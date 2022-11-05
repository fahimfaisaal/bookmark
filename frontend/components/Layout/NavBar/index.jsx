import {
  Avatar,
  Badge,
  Box,
  Button,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineFilter } from 'react-icons/ai';
import { BiSearch, BiUser } from 'react-icons/bi';
import { BsSunFill } from 'react-icons/bs';
import { CgMenuLeft, CgShoppingBag } from 'react-icons/cg';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { RiMoonLine } from 'react-icons/ri';
import { VscHome } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { BOOKMARK_AUTH } from '../../../constant';
import { UseThemeContext } from '../../../context/ThemeContext';
import { userLoggedOut } from '../../../store/features/auth/authSlice';
import { useGetBooksQuery } from '../../../store/features/books/booksApi';
import { useGetCartsByUserQuery } from '../../../store/features/carts/cartsApi';
import Drawer from './Drawer';
import SearchBar from '../../shared/SearchBar';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import CartItemComponent from './CartItemComponent';
import useAuthCheck from '../../../hooks/useAuthCheck';
import { categoreyItems, menuItems } from './menuLinks';
import {
  AppBarContainer,
  IconContainer,
  LinkContainer,
  LogoContainer,
  MenuItemContainer,
  MiniTopBarContainer,
  MobileBarContainer,
  MobileMenuContainer,
  MobMenuItemContainer,
  ThemeSwitchStyle
} from './Styles';
const NavBar = () => {
  const theme = useTheme();
  const authChecked = useAuthCheck(); //don't remove it
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [cartBookFilter, setCartBookFilter] = useState();
  const [serachTrig, setSearchTrig] = useState(false);
  const [cartListsWithImage, setCartListsWithImage] = useState();
  const [cartModalTrg, setCartModalTrig] = useState(false);
  const [mobMenuTrig, setMobMenuTrig] = useState(false);
  const [mobSearchTrig, setMobSearchTrig] = useState(false);
  const [filterMenuTrig, setFilterMenuTrig] = useState(false);
  const [profileMenuTrig, setProfileMenuTrig] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const { handleChangeMode } = UseThemeContext();
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state?.auth);
  const authUser = isAuthenticated?.user || {};

  const { data: cartLists } = useGetCartsByUserQuery({ userId: authUser?.id });
  const { data: cartBooks } = useGetBooksQuery(cartBookFilter);

  useEffect(() => {
    const cartbookIds = cartLists?.data?.map(
      (item) => item?.attributes?.book?.data?.id
    );
    let query = {
      populate: ['images'],
      filters: {
        id: {
          $in: cartbookIds
        }
      }
    };
    setCartBookFilter({
      query
    });
  }, [cartLists]);

  useEffect(() => {
    if (cartLists?.data && cartBooks?.data) {
      let cartBookItem = cartBooks?.data?.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.id]: curr?.attributes?.images?.data[0]?.attributes?.url
        }),
        {}
      );

      let cartWithImage = cartLists?.data?.map((item, ind) => {
        return {
          ...item.attributes,
          cartImage: cartBookItem[item?.attributes?.book?.data?.id],
          id: cartLists?.data[ind]?.id
        };
      });
      setCartListsWithImage(cartWithImage);
    }
  }, [cartLists?.data, cartBooks?.data]);

  // console.log({ cartB: cartLists?.data });

  const totalAmount = cartLists?.data?.reduce(
    (acc, curr) =>
      acc +
      curr?.attributes?.variant?.data?.attributes?.price *
        curr?.attributes?.quantity,
    0
  );

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutUser = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem(BOOKMARK_AUTH);
    router.push('/');
    console.log('logout click');
  };
  // have logout dependency
  const profileMenuItems = [
    {
      link: '/profile',
      text: 'Profile'
    },
    {
      link: '/profile/my-orders',
      text: 'My Orders'
    },
    {
      link: '/profile/my-wishlist',
      text: 'My Wishlists'
    },
    {
      link: '/checkout',
      text: 'Checkout'
    },
    {
      link: '/profile/change-password',
      text: 'Change Password'
    },
    {
      link: '/logout',
      text: 'Logout',
      onClickHandler: logoutUser
    }
  ];

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

  const toggleSearch = () => {
    setSearchTrig(true);
  };

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

  const handleSearchToggle = () => {
    if (mobSearchTrig) {
      setMobSearchTrig(false);
    } else {
      setMobSearchTrig(true);
    }
  };

  const handleHome = () => {
    router.push('/');
  };

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

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
                <Link href={item.link}>
                  <LinkContainer
                    key={item.text}
                    active={router.pathname.includes(item.link)}
                  >
                    {item.text}
                  </LinkContainer>
                </Link>
              ))}
              <LinkContainer additional={true} onClick={toggleSearch}>
                Search
              </LinkContainer>
            </Stack>
          ) : (
            <SearchBar normal={false} />
          )}
          <SearchBar normal={true} />
          <IconContainer onClick={handleChangeMode}>
            <ThemeSwitchStyle>
              {theme.palette.mode === 'light' ? <RiMoonLine /> : <BsSunFill />}
            </ThemeSwitchStyle>
          </IconContainer>
          <IconContainer fontSize={'28px'} onClick={toggleDrawer(true)}>
            <Badge badgeContent={cartLists?.data?.length} color="primary">
              <HiOutlineShoppingBag />
            </Badge>
          </IconContainer>
          <Link href={'/profile/my-wishlist'}>
            <IconContainer fontSize={'32px'}>
              <Badge badgeContent={2} color="primary">
                <MdOutlineFavoriteBorder />
              </Badge>
            </IconContainer>
          </Link>

          {!!isAuthenticated?.accessToken ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{
                  mt: '45px'
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {profileMenuItems.map((item) =>
                  item?.onClickHandler ? (
                    <MenuItemContainer key={item.text}>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography
                          textAlign="center"
                          onClick={item?.onClickHandler}
                        >
                          {item.text}
                        </Typography>
                      </MenuItem>
                    </MenuItemContainer>
                  ) : (
                    <MenuItemContainer key={item.text}>
                      <Link href={item.link}>
                        <MenuItem onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">
                            {item.text}
                          </Typography>
                        </MenuItem>
                      </Link>
                    </MenuItemContainer>
                  )
                )}
              </Menu>
            </Box>
          ) : (
            <Box>
              <Button
                variant="contained"
                disableElevation={true}
                onClick={handleClickOpenLogin}
              >
                Join
              </Button>
            </Box>
          )}
        </Stack>

        <CartItemComponent
          cartModalTrg={cartModalTrg}
          toggleDrawer={toggleDrawer}
          theme={theme}
          cartLists={cartListsWithImage}
          totalAmount={totalAmount}
        />
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
          <IconContainer onClick={handleChangeMode}>
            <ThemeSwitchStyle>
              {theme.palette.mode === 'light' ? <RiMoonLine /> : <BsSunFill />}
            </ThemeSwitchStyle>
          </IconContainer>
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
