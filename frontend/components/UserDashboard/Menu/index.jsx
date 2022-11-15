import { List, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useProfileMenuHandlers from '../../../hooks/useProfileMenuHandlers';
import { useGetNavigationQuery } from '../../../store/features/singleType/navigation/navigationApi';
import { shortId } from '../../../utils';
import { StyledContainer, StyledLink, StyledListItem } from './Styles';

function ProfileMenu() {
  const router = useRouter();
  const profileMenuHandlers = useProfileMenuHandlers();
  const { data } = useGetNavigationQuery();

  return (
    <StyledContainer marginTop={2} sx={{ boxShadow: 2 }}>
      <List>
        {data?.data?.attributes?.profileMenus?.map((menu) => (
          <StyledListItem
            key={shortId()}
            active={router.pathname === menu.url}
            sx={menu.text === 'Logout' ? { borderTop: '1px solid gray' } : ''}
          >
            {typeof profileMenuHandlers[menu?.onClickHandler] === 'function' ? (
              <StyledLink active={router.pathname === menu.url}>
                <Typography onClick={profileMenuHandlers[menu?.onClickHandler]}>
                  {menu.text}
                </Typography>
              </StyledLink>
            ) : (
              <Link href={menu.url}>
                <StyledLink active={router.pathname === menu.url}>
                  {menu.text}
                </StyledLink>
              </Link>
            )}
          </StyledListItem>
        ))}
      </List>
    </StyledContainer>
  );
}

export default ProfileMenu;
