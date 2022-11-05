import { List } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StyledContainer, StyledLink, StyledListItem } from './Styles';

const profileMenu = [
  {
    path: '/profile',
    label: 'Profile'
  },
  {
    path: '/profile/change-password',
    label: 'Change Password'
  },
  {
    path: '/profile/my-orders',
    label: 'My Orders'
  },
  {
    path: '/profile/my-wishlist',
    label: 'My Wishlist'
  }
];

const ProfileMenu = () => {
  const router = useRouter();
  return (
    <StyledContainer marginTop={2} sx={{ boxShadow: 2 }}>
      <List>
        {profileMenu.map((item) => (
          <StyledListItem active={router.pathname === item.path}>
            <Link href={item.path}>
              <StyledLink active={router.pathname === item.path}>
                {item.label}
              </StyledLink>
            </Link>
          </StyledListItem>
        ))}
        <StyledListItem sx={{ borderTop: `1px solid gray` }}>
          <Link href="/">
            <StyledLink>Logout</StyledLink>
          </Link>
        </StyledListItem>
      </List>
    </StyledContainer>
  );
};

export default ProfileMenu;
