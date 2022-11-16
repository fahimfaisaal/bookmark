import React from 'react';
import { Box, Button, styled } from '@mui/material';
import { useRouter } from 'next/router';

// eslint-disable-next-line no-unused-vars
const BoxStyled = styled(Box)(({ theme }) => ({
  width: '400px',
  height: '90vh',
  display: 'grid',
  placeItems: 'center',
  margin: 'auto',
  '& .img': {
    width: '100%',
    objectFit: 'contain'
  }
}));

// eslint-disable-next-line no-unused-vars
const OrderBox = styled(Box)(({ theme }) => ({
  // width: "400px",
  // height: "90vh",
  // display: "grid",
  // placeItems: "center",
  margin: 'auto',
  '& .img': {
    width: '200px',
    objectFit: 'contain',
    display: 'block'
  },
  '& .btn': {}
}));

export default function NoDataItemFound({ msg, imgSrc, url, btnText }) {
  const router = useRouter();
  return (
    <BoxStyled>
      {msg && <Box>{msg}</Box>}
      {imgSrc && <img src={imgSrc} alt="no data found" className="img" />}
      {url && (
        <Button
          sx={{ textAlign: 'center', m: '2rem' }}
          onClick={() => router.push(url)}
        >
          {btnText}
        </Button>
      )}
    </BoxStyled>
  );
}

export const NoOrderItemFound = ({ msg, imgSrc, url, btnText }) => {
  const router = useRouter();
  return (
    <OrderBox>
      {msg && <Box>{msg}</Box>}
      {imgSrc && <img src={imgSrc} alt="no data found" className="img" />}
      {url && (
        <Button
          sx={{ textAlign: 'center', m: '2rem' }}
          onClick={() => router.push(url)}
        >
          {btnText}
        </Button>
      )}
    </OrderBox>
  );
};
