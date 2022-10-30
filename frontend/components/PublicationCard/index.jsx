import { Box, Stack } from '@mui/system';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import CustomImage from '../CustomImage';
import CardTitle from './CardTitle';
import { ContainerStyle, LinkContainer, LogoContainer } from './Styles';

const PublicationCard = ({ publisher }) => {
  const {attributes: {name, logo, banner}} = publisher
  const logoUrl = logo?.data && `http://localhost:1337${ logo?.data[0]?.attributes?.url}` || "/images/publisher-logo.png";
  const bannerUrl = banner?.data && `http://localhost:1337${banner?.data[0]?.attributes?.url}` || "/images/publisher-logo.png";
  return (
    <Stack direction={'row'}>
      <ContainerStyle>
        <LogoContainer>
          <CustomImage src={logoUrl} alt={name} />
        </LogoContainer>
        <Box>
          <Link href={'/publishers/123'}>
            <Box>
              <CardTitle title={'Too cool publication'} variant={'h2'} />
            </Box>
          </Link>
          <Stack direction={'row'} spacing={1}>
            <LinkContainer>
              <BsFacebook />
            </LinkContainer>
            <LinkContainer>
              <BsYoutube />
            </LinkContainer>
            <LinkContainer>
              <BsInstagram />
            </LinkContainer>
          </Stack>
        </Box>
      </ContainerStyle>
    </Stack>
  );
};

export default PublicationCard;
