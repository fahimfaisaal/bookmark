import { Box } from '@mui/system';
import CardTitle from '../PublicationCard/CardTitle';
import { ImageContainerStyle } from './Styles';

const CategoryCard = ({ category }) => {
  const {coverImage, type} = category
  const categoryImage = `http://localhost:1337${coverImage?.data?.attributes?.url}` || "/images/author-dummy.png";
  return (
    <Box>
      <ImageContainerStyle>
        <img src={categoryImage} alt={type} width={'100%'} height={'100%'} />
      </ImageContainerStyle>
      <CardTitle title={type} variant={'h3'} />
    </Box>
  );
};

export default CategoryCard;
