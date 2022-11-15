import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import CustomImage from '../CustomImage';
import CardTitle from '../PublicationCard/CardTitle';
import { ImageContainerStyle } from './Styles';

function CategoryCard({ category, id }) {
  const router = useRouter();
  const { coverImage, type } = category;
  const categoryImage =
    coverImage?.data?.attributes?.url || '/images/author-dummy.png';
  const clickHandler = () => {
    router.push(`/books?categories=${id}`);
  };

  return (
    <Box onClick={clickHandler}>
      <ImageContainerStyle>
        <CustomImage
          src={categoryImage}
          alt={type}
          width="100%"
          height="100%"
        />
      </ImageContainerStyle>
      <CardTitle title={type} variant="h3" />
    </Box>
  );
}

export default CategoryCard;
