import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  ListItem,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tooltip,
  Typography,
  useTheme,
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
import { HiOutlineShoppingBag, HiShoppingBag } from 'react-icons/hi';
import { IoIosClose } from 'react-icons/io';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { RiMoonLine } from 'react-icons/ri';
import { VscHome } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { BOOKMARK_AUTH } from '../../../constant';
import { UseThemeContext } from '../../../context/ThemeContext';
import useAuthCheck from '../../../hooks/useAuthCheck';
import { userLoggedOut } from '../../../store/features/auth/authSlice';
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
  ThemeSwitchStyle,
} from "./Styles";
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const menuItems = [
  {
    link: "/books",
    text: "Books",
  },
  {
    link: "/authors",
    text: "Authors",
  },
  {
    link: "/publishers",
    text: "Publishers",
  },
  {
    link: "/contact",
    text: "Contact",
  },
  {
    link: "/about",
    text: "About Us",
  },
];

const categoreyItems = [
  {
    link: "",
    text: "Comic books",
  },
  {
    link: "",
    text: " Science Fiction",
  },
  {
    link: "",
    text: "Literature",
  },
  {
    link: "",
    text: "Childrens",
  },
  {
    link: "",
    text: "Literature",
  },
  {
    link: "",
    text: "Horror Fiction",
  },
];

const Drawer = ({ anchor, data, open, toggle }) => {
  const router = useRouter();
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
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
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
            <ListItem key={item.text} onClick={toggle(false)}>
              <Link href={item.link}>
                <MenuLinkContainer active={router.pathname.includes(item.link)}>
                  {item.text}
                </MenuLinkContainer>
              </Link>
            </ListItem>
          ))}
        </MenuListContainer>
      </MenuContainer>
    </SwipeableDrawer>
  );
};

const NavBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const authChecked = useAuthCheck();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { handleChangeMode } = UseThemeContext();
  const router = useRouter();
  const isAuthenticated = useSelector(state => state?.auth)


  // console.log({isAuthenticat: !!isAuthenticated.accessToken, isAuthenticated });

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutUser = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem(BOOKMARK_AUTH);
    console.log("logout user");
    router.push("/");
  };

  // console.log({ navabr: authChecked });

  const [cartModalTrg, setCartModalTrig] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
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
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobMenuTrig(open);
  };
  const [profileMenuTrig, setProfileMenuTrig] = useState(false);

  const toggleProfileDraw = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setProfileMenuTrig(open);
  };
  const [filterMenuTrig, setFilterMenuTrig] = useState(false);

  const toggleFilterDraw = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
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

  const profileMenuItems = [
    {
      link: "/profile",
      text: "Profile",
    },
    {
      link: "/profile/my-orders",
      text: "My Orders",
    },
    {
      link: "/profile/my-wishlist",
      text: "My Wishlists",
    },
    {
      link: "/checkout",
      text: "Checkout",
    },
    {
      link: "/profile/change-password",
      text: "Change Password",
    },
    {
      link: "/logout",
      text: "Logout",
      onClickHandler: logoutUser,
    },
  ];

  const handleHome = () => {
    router.push("/");
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
          direction={"row"}
          spacing={2}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Link href="/">
            <LogoContainer marginTop={"8px"}>
              <img src="/images/logo-1.png" alt="" />
            </LogoContainer>
          </Link>
          {!serachTrig ? (
            <Stack direction={"row"} spacing={2} alignItems="center">
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
              {theme.palette.mode === "light" ? <RiMoonLine /> : <BsSunFill />}
            </ThemeSwitchStyle>
          </IconContainer>
          <IconContainer fontSize={"28px"} onClick={toggleDrawer(true)}>
            <Badge badgeContent={4} color="primary">
              <HiOutlineShoppingBag />
            </Badge>
          </IconContainer>
          <Link href={"/profile/my-wishlist"}>
            <IconContainer fontSize={"32px"}>
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
                  mt: "45px",
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
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

        <SwipeableDrawer
          anchor={"right"}
          open={cartModalTrg}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <CartContainer role="presentation">
            <CartHeaderContainer>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack direction={"row"} alignItems={"center"}>
                  <HiShoppingBag fontSize={"24px"} />
                  <Typography variant="h4" fontSize={"18px"} px={"10px"}>
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
            <CartItemContainer>
              <CartItem />
            </CartItemContainer>
            <Divider />
            <CartItemContainer>
              <CartItem />
            </CartItemContainer>
            <Divider />
          </CartContainer>
          <Box
            pb={5}
            px={3}
            sx={{ background: `${theme.palette.background.default}` }}
          >
            <Typography variant="h2" py={3}>
              Total: 200$
            </Typography>
            <Button variant="contained" fullWidth={true} size={"large"}>
              Checkout
            </Button>
          </Box>
        </SwipeableDrawer>
      </AppBarContainer>

      <MobileBarContainer position="fixed">
        <Stack
          direction={"row"}
          spacing={2}
          alignItems="center"
          justifyContent={"center"}
        >
          {mobSearchTrig ? (
            <SearchBar normal={false} />
          ) : (
            <Link href="/">
              <LogoContainer marginTop={"8px"}>
                <img src="/images/logo-1.png" alt="" />
              </LogoContainer>
            </Link>
          )}
        </Stack>
      </MobileBarContainer>
      <MiniTopBarContainer>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Button variant="outlined" onClick={toggleFilterDraw(true)}>
              <AiOutlineFilter />
              <Typography variant="h4" marginLeft={"5px"}>
                Filter
              </Typography>
            </Button>
          </Box>
          <IconContainer onClick={handleChangeMode}>
            <ThemeSwitchStyle>
              {theme.palette.mode === "light" ? <RiMoonLine /> : <BsSunFill />}
            </ThemeSwitchStyle>
          </IconContainer>
        </Stack>

        <Drawer
          anchor={"left"}
          open={filterMenuTrig}
          toggle={toggleFilterDraw}
          data={categoreyItems}
        />
      </MiniTopBarContainer>

      <MobileMenuContainer position="fexed">
        <Stack
          direction={"row"}
          spacing={2}
          alignItems="center"
          justifyContent={"space-between"}
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
          anchor={"left"}
          open={mobMenuTrig}
          toggle={toggleMenuDraw}
          data={menuItems}
        />
        <Drawer
          anchor={"right"}
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
