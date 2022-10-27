import { Button, Divider, List, ListItem } from '@mui/material';
import Link from 'next/link';
import { StyledContainer, StyledLink, StyledListItem } from './Styles';

const profileMenu = [
  {
    path: '/profile',
    label: 'Profile',
  },
  {
    path: '/profile/change-password',
    label: 'Change Password',
  },
  {
    path: '/profile/my-orders',
    label: 'My Orders',
  },
  {
    path: '/profile/my-whishlist',
    label: 'My Wishlist',
  },
  {
    path: '',
    label: 'Logout',
  },
];

const ProfileMenu = () => {
  return (
    <StyledContainer marginTop={2}>
      <List>
        {profileMenu.map((item) => (
          <StyledListItem>
            <Link href={item.path}>
              <StyledLink>{item.label}</StyledLink>
            </Link>
          </StyledListItem>
        ))}
      </List>
    </StyledContainer>
  );
};

export default ProfileMenu;
