import {
  Box,
  Button,
  Divider,
  SwipeableDrawer,
  Typography
} from '@mui/material';
import { Stack } from '@mui/system';
import { useRouter } from 'next/router';
import { HiShoppingBag } from 'react-icons/hi';
import { IoIosClose } from 'react-icons/io';
import { shortId } from '../../../utils';
import CartItem from '../../CartItem';
import {
  CartContainer,
  CartHeaderContainer,
  CartItemContainer,
  CloseBtnContaner
} from './Styles';

export default function CartItemComponent({
  cartModalTrg,
  toggleDrawer,
  theme,
  cartLists,
  totalAmount
}) {
  const router = useRouter();

  const navigateCheckout = () => {
    toggleDrawer(false);
    router.push('/checkout');
  };

  return (
    <SwipeableDrawer
      anchor="right"
      open={cartModalTrg}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <CartContainer role="presentation">
        <CartHeaderContainer>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" alignItems="center">
              <HiShoppingBag fontSize="24px" />
              <Typography variant="h4" fontSize="18px" px="10px">
                {cartLists?.length > 0 ? cartLists?.length : 'No'} Item
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

        {cartLists?.map((cart) => (
          <CartItemContainer key={shortId()}>
            <CartItem cart={cart} cartId={cart?.id} key={cart?.id} />
          </CartItemContainer>
        ))}
      </CartContainer>
      {cartLists?.length > 0 && totalAmount && (
        <Box
          pb={5}
          px={3}
          sx={{ background: `${theme.palette.background.default}` }}
        >
          <Typography variant="h2" py={3}>
            Total: {totalAmount}$
          </Typography>
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={navigateCheckout}
          >
            Checkout
          </Button>
        </Box>
      )}
    </SwipeableDrawer>
  );
}
