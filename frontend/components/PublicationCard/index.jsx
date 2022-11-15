import { Box, Stack } from '@mui/system';
import Link from 'next/link';
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';

import CustomImage from '../CustomImage';
import CardTitle from './CardTitle';
import { ContainerStyle, LinkContainer, LogoContainer } from './Styles';

function PublicationCard({ publisher }) {
  const {
    attributes: { name, logo, socials }
  } = publisher;
  const logoUrl =
    (logo?.data && logo?.data[0]?.attributes?.url) ||
    '/images/publisher-logo.png';
  return (
    <Stack direction="row">
      <ContainerStyle>
        <LogoContainer>
          <CustomImage src={logoUrl} alt={name} />
        </LogoContainer>
        <Box>
          <Link href={`/publishers/${publisher.id}`}>
            <Box>
              <CardTitle title={name} variant="h2" />
            </Box>
          </Link>
          <Stack direction="row" spacing={1}>
            <LinkContainer target="_blank" href={socials.split(',')[0]}>
              <BsFacebook />
            </LinkContainer>
            <LinkContainer target="_blank" href={socials.split(',')[1]}>
              <BsTwitter />
            </LinkContainer>
            <LinkContainer target="_blank" href={socials.split(',')[2]}>
              <BsLinkedin />
            </LinkContainer>
          </Stack>
        </Box>
      </ContainerStyle>
    </Stack>
  );
}

export default PublicationCard;
