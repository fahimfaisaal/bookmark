import { Box, Divider, ListItem, Stack, SwipeableDrawer } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoIosClose } from 'react-icons/io';
import { shortId } from '../../../utils';
import Logo from '../../Logo';
import {
  CloseBtnContaner,
  MenuContainer,
  MenuHeaderContiner,
  MenuLinkContainer,
  MenuListContainer
} from './Styles';

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
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Link href="/">
              <Logo />
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
          {data?.map((item) => (
            <ListItem key={shortId()} onClick={toggle(false)}>
              <Link href={item.url || '/'}>
                <MenuLinkContainer active={router.pathname.includes(item.url)}>
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

export default Drawer;
