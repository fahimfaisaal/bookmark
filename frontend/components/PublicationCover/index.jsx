import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import CustomImage from '../CustomImage';

import {
  BannerContainerStyle,
  ContainerStyle,
  DetailsContainerStyle,
  LinkContainer,
  LogoContainer,
  ProfileContainerStyle,
  TitleStyle,
} from './style';

const PublicationCover = ({ img, title, slug }) => {
  return (
    <ContainerStyle>
      <ProfileContainerStyle
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <LogoContainer>
          <img src="/images/publisher-logo.png" alt="" />
        </LogoContainer>
        <DetailsContainerStyle>
          <TitleStyle variant={'h2'}>Too Cool Publication</TitleStyle>
          <LinkContainer>
            <Typography variant="caption">https://redq.io/</Typography>
          </LinkContainer>
          <Stack direction={'row'} spacing={1} justifyContent={'center'}>
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
        </DetailsContainerStyle>
      </ProfileContainerStyle>

      <BannerContainerStyle>
        <CustomImage src="/images/publisher-banner.png" alt="" />
      </BannerContainerStyle>
    </ContainerStyle>
  );
};

export default PublicationCover;
