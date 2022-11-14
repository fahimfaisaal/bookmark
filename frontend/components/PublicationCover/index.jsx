import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { adjustValidURL } from '../../utils';
import CustomImage from '../CustomImage';

import {
  BannerContainerStyle,
  ContainerStyle,
  DetailsContainerStyle,
  LinkContainer,
  LogoContainer,
  ProfileContainerStyle,
  TitleStyle
} from './style';

function PublicationCover({ publisherData }) {
  // const { name, logo, banner, socials, website } = publisherData;
  const logoUrl =
    (publisherData?.data &&
      adjustValidURL(publisherData?.logo?.data[0]?.attributes?.url)) ||
    '/images/publisher-logo.png';
  const bannerUrl =
    (publisherData?.data &&
      adjustValidURL(publisherData?.banner?.data[0]?.attributes?.url)) ||
    '/images/publisher-banner.png';

  return (
    <ContainerStyle>
      <ProfileContainerStyle
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <LogoContainer>
          <img src={logoUrl} alt="" />
        </LogoContainer>
        <DetailsContainerStyle>
          <TitleStyle variant="h2">{publisherData?.name}</TitleStyle>
          <LinkContainer>
            <Typography variant="caption">{publisherData?.website}</Typography>
          </LinkContainer>
          <Stack direction="row" spacing={1} justifyContent="center">
            <LinkContainer
              target="_blank"
              href={publisherData?.socials.split(',')[0]}
            >
              <BsFacebook />
            </LinkContainer>
            <LinkContainer
              target="_blank"
              href={publisherData?.socials.split(',')[1]}
            >
              <BsTwitter />
            </LinkContainer>
            <LinkContainer
              target="_blank"
              href={publisherData?.socials.split(',')[2]}
            >
              <BsLinkedin />
            </LinkContainer>
          </Stack>
        </DetailsContainerStyle>
      </ProfileContainerStyle>

      <BannerContainerStyle>
        <CustomImage src={bannerUrl} alt={publisherData?.name} />
      </BannerContainerStyle>
    </ContainerStyle>
  );
}

export default PublicationCover;
