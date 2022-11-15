import { List } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useGetNavigationQuery } from '../../../store/features/singleType/navigation/navigationApi';
import { shortId } from '../../../utils';
import { StyledContainer, StyledLink, StyledListItem } from './Styles';

function ProfileMenu() {
  const router = useRouter();

  const { data } = useGetNavigationQuery();
  return (
    <StyledContainer marginTop={2} sx={{ boxShadow: 2 }}>
      <List>
        {data?.data?.attributes?.profileMenus?.map((item) => (
          <StyledListItem
            key={shortId()}
            active={router.pathname === item.url}
            sx={item.text === 'Logout' ? { borderTop: '1px solid gray' } : ''}
          >
            <Link href={item.url}>
              <StyledLink active={router.pathname === item.url}>
                {item.text}
              </StyledLink>
            </Link>
          </StyledListItem>
        ))}
      </List>
    </StyledContainer>
  );
}

export default ProfileMenu;
