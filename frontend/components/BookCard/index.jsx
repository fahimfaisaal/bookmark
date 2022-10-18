import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { StyledContainer } from './Styles';
// import { FaShoppingCart } from 'react-icons/fa';

const BookCard = ({
  title,
  img,
  price,
  author,
  category,
  stock,
  salePrice,
}) => {
  return (
    <>
      <Image src="/Comic-Books.jpg" width={300} height={400} />
      <Typography variant="subtitle1" color="common.black">
        Superhero & Aliens
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="caption">by</Typography>
        <Typography variant="body2">Brandon T.Trigg</Typography>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="caption" color="orange">
          $300.00
        </Typography>
        <StyledContainer>
          <Button>
            {/* <FaShoppingCart /> Cart */}
            Cart{' '}
          </Button>
        </StyledContainer>
      </Stack>
    </>
  );
};

export default BookCard;
