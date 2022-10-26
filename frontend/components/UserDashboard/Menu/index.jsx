import { Button, Divider, List, ListItem } from '@mui/material';
import Link from 'next/link';
import { StyledContainer, StyledLink } from './Styles';

const ProfileMenu = () => {
  return (
    <StyledContainer marginTop={2}>
      <List>
        <ListItem>
          <Link href="/profile">
            <StyledLink>Profile</StyledLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/profile/change-password">
            <StyledLink>Change Password</StyledLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/profile/my-orders">
            <StyledLink>My Orders</StyledLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/profile/my-whishlist">
            <StyledLink>My Wishlist</StyledLink>
          </Link>
        </ListItem>
        <Divider />
        <ListItem>
          <Link href="#">
            <StyledLink>Logout</StyledLink>
          </Link>
        </ListItem>
      </List>
    </StyledContainer>
  );
};

export default ProfileMenu;
