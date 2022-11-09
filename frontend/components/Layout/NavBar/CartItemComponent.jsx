import {
  Box,
  Button,
  Divider,
  SwipeableDrawer,
  Typography
} from '@mui/material';
import { Stack } from '@mui/system';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { HiShoppingBag } from 'react-icons/hi';
import { IoIosClose } from 'react-icons/io';
import { useSelector } from 'react-redux';
import getStripe from '../../../lib/getStripe';
import { usePostOrderMutation } from '../../../store/features/orders/ordersApi';
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
  const isAuthenticated = useSelector((state) => state?.auth);
  const [postOrder] = usePostOrderMutation();

  const navigateCheckout = async () => {
    console.log('Before Call');
    toggleDrawer(false);
    if (isAuthenticated?.user) {
      // router.push('/checkout');
      const stripe = await getStripe();
      console.log('Before Call');

      const response = await axios.post(
        '/api/stripe',
        JSON.stringify(cartLists),
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('After Call', response);

      if (response.statusCode === 500) return;

      const orderData = {
        userId: cartLists[0]?.usersId?.data?.id,
        books: []
      };
      cartLists.map((item) => {
        orderData.books.push(item?.id);
      });
      console.log({ orderData });

      postOrder(orderData);

      const data = await response.data;

      toast.loading('Redirecting...');

      stripe.redirectToCheckout({ sessionId: data.id });
    }
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
