import {
  Box,
  Button,
  Divider,
  SwipeableDrawer,
  Typography
} from "@mui/material";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import { HiShoppingBag } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import CartItem from "../../CartItem";
import {
  CartContainer,
  CartHeaderContainer,
  CartItemContainer,
  CloseBtnContaner
} from "./Styles";

import { useSelector } from "react-redux";
import { useGetCartsByUserQuery } from "../../../store/features/carts/cartsApi";

export default function CartItemComponent({
  cartModalTrg,
  toggleDrawer,
  theme,
  cartLists,
  totalAmount
}) {
  const router = useRouter()

  const authUser = useSelector((state) => state?.auth?.user);
  const { data: cartLists } = useGetCartsByUserQuery({ userId: authUser?.id });

  const totalAmount = cartLists?.data?.reduce(
    (acc, curr) => acc + curr?.attributes?.variant?.data?.attributes?.price,
    0
  );
  const navigateCheckout = () => {
    toggleDrawer(false)
    router.push("/checkout") 
    
  }
  console.log({ cartLists, totalAmount });
  return (
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
                {cartLists?.data?.length > 0 ? cartLists?.data?.length : "No"}{" "}
                Item
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

        {cartLists?.data?.map((cart) => (
          <CartItemContainer>
            <CartItem cart={cart?.attributes} cartId={cart?.id} key={cart?.id} />
          </CartItemContainer>
        ))}
      </CartContainer>
      {cartLists?.data?.length > 0 && totalAmount && (
        <Box
          pb={5}
          px={3}
          sx={{ background: `${theme.palette.background.default}` }}
        >
          <Typography variant="h2" py={3}>
            Total: {totalAmount}$
          </Typography>
          <Button variant="contained" fullWidth={true} size={"large"} onClick={navigateCheckout}>
            Checkout
          </Button>
        </Box>
      )}
    </SwipeableDrawer>
  );
}