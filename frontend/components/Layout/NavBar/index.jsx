import {
  Avatar,
  Badge,
  Box,
  Divider,
  InputBase,
  Link,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/system";
import { useState } from "react";
import { BiSearch, BiUser } from "react-icons/bi";
import { CgMenuLeft, CgShoppingBag } from "react-icons/cg";
import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { VscHome } from "react-icons/vsc";
import { UseThemeContext } from "../../../context/ThemeContext";
import CartItem from "../../CartItem";
import {
  AppBarContainer,
  CartContainer,
  CartHeaderContainer,
  CartItemContainer,
  CloseBtnContaner,
  IconContainer,
  LinkContainer,
  LogoContainer,
  MenuItemContainer,
  MobileBarContainer,
  MobileMenuContainer,
  SearchContainer,
  ThemeSwitch,
} from "./Styles";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [focus, setFocus] = useState(false);
  const { handleChangeMode } = UseThemeContext();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOnFocus = () => {
    setFocus(true);
  };
  const handleOnBlur = () => {
    setFocus(false);
  };

  const theme = useTheme();

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

  const SearchBar = ({ normal, handleOnFocus, handleOnBlur }) => {
    return (
      <SearchContainer
        sx={
          focus
            ? { border: `1px solid ${theme.palette.primary.main}` }
            : { border: `1px solid ${theme.palette.background.dark}` }
        }
        normal={normal}
      >
        <BiSearch />
        <InputBase
          placeholder="Search (type at least 3 chars)"
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
      </SearchContainer>
    );
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
              <LinkContainer href="/books">Books</LinkContainer>
              <LinkContainer href="/authors">Authors</LinkContainer>
              <LinkContainer href="publishers">Publishers</LinkContainer>
              <LinkContainer href="/contact">Contact</LinkContainer>
              <LinkContainer href="/about">About Us</LinkContainer>
              <LinkContainer additional={true} onClick={toggleSearch}>
                Search
              </LinkContainer>
            </Stack>
          ) : (
            <SearchBar
              handleOnBlur={handleOnBlur}
              handleOnFocus={handleOnFocus}
            />
          )}
          <SearchBar
            normal={true}
            handleOnBlur={handleOnBlur}
            handleOnFocus={handleOnFocus}
          />
          <IconContainer>
            <ThemeSwitch onChange={handleChangeMode} />
          </IconContainer>
          <IconContainer fontSize={"28px"} onClick={toggleDrawer(true)}>
            <Badge badgeContent={4} color="primary">
              <HiOutlineShoppingBag />
            </Badge>
          </IconContainer>
          <IconContainer fontSize={"32px"}>
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
              {settings.map((setting) => (
                <MenuItemContainer key={setting}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                </MenuItemContainer>
              ))}
            </Menu>
          </Box>
        </Stack>
        <SwipeableDrawer
          anchor={"right"}
          open={cartModalTrg}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <CartContainer
            role="presentation"
            // onClick={toggleDrawer(false)}
            // onKeyDown={toggleDrawer(false)}
          >
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
          </CartContainer>
        </SwipeableDrawer>
      </AppBarContainer>
      <MobileBarContainer position="fixed">
        <Stack
          direction={"row"}
          spacing={2}
          alignItems="center"
          justifyContent={"center"}
        >
          <Link href="/">
            <LogoContainer marginTop={"8px"}>
              <img src="/images/logo-1.png" alt="" />
            </LogoContainer>
          </Link>
        </Stack>
      </MobileBarContainer>
      <MobileMenuContainer position="fexed">
        <Stack
          direction={"row"}
          spacing={2}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <CgMenuLeft />
          <BiSearch />
          <VscHome />
          <CgShoppingBag />
          <BiUser />
        </Stack>
      </MobileMenuContainer>
    </>
  );
};

export default NavBar;
