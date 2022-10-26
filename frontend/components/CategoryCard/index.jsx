/** @format */

import { Box } from '@mui/system';
import CardTitle from '../PublicationCard/CardTitle';
import { ImageContainerStyle } from './Styles';

const CategoryCard = ({ image, title, slug }) => {
  return (
    <Box>
      <ImageContainerStyle>
        <img src="/images/book-1.jpg" alt="" width={'100%'} height={'100%'} />
      </ImageContainerStyle>
      <CardTitle title={'Commic Books'} variant={'h3'} />
    </Box>
  );
};

export default CategoryCard;
