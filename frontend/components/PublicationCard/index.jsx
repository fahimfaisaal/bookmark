import { Box, Stack } from '@mui/system';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import CustomImage from '../CustomImage';
import CardTitle from './CardTitle';
import { ContainerStyle, LinkContainer, LogoContainer } from './Styles';

const PublicationCard = ({ publisher }) => {
  const {attributes: {name, logo, banner}} = publisher
  const url = logo?.data && logo?.data[0]?.attributes?.url || "/images/publisher-logo.png";
  return (
    <Stack direction={'row'}>
      <ContainerStyle>
        <LogoContainer>
          <CustomImage src={url} alt={name} />
        </LogoContainer>
        <Box>
          <CardTitle title={name} variant={'h2'} />
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
