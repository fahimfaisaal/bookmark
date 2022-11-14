import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { ContainerStyle, HeaderStyle, IconStyle } from './Styles';

const Success = () => {
  useEffect(() => {
    toast.success('Payment Successful!');
  }, []);
  return (
    <ContainerStyle>
      <Head>
        <title>Payment Success</title>
        <meta
          name="description"
          content="Bookmark application cart items payment page"
        />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/2/2f/Icon-green-line-b-default.svg"
        />
      </Head>
      <IconStyle>
        <BsFillBagCheckFill />
      </IconStyle>
      <HeaderStyle>Thank you for your purchase</HeaderStyle>
      <Typography variant="body1">
        Check your email inbox for the receipt
      </Typography>
      <Typography variant="body1" py={3}>
        If you have any question, please email bookmark@gmail.com
      </Typography>
      <Box my={5} m="30px auto" width="50%">
        <Link href={'/'}>
          <Button variant="contained" size="large" fullWidth={true}>
            CONTINUE SHOPPING
          </Button>
        </Link>
      </Box>
    </ContainerStyle>
  );
};

export default Success;
