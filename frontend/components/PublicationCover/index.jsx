import { Box, Stack } from '@mui/system';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import CardTitle from '../PublicationCard/CardTitle';
import { Typography } from '@mui/material';

import {
    ContainerStyle,
    LinkContainer,
    LogoContainer,
    DetailsContainerStyle,
    ProfileContainerStyle,
    BannerContainerStyle,
    BannerContainer,
} from './style';

const PublicationCover = ({ img, title, slug }) => {
    return (
        <ContainerStyle>
            <ProfileContainerStyle>
                <Stack
                    direction={'column'}
                    justifyContent={'center'}
                    spacing={2}
                >
                    <LogoContainer>
                        <img src="/images/publisher-logo.png" alt="" />
                    </LogoContainer>
                    <DetailsContainerStyle>
                        <CardTitle
                            title={'Too cool publication'}
                            variant={'h3'}
                        />
                        <LinkContainer>
                            <Typography variant="caption">
                                https://redq.io/
                            </Typography>
                        </LinkContainer>
                        <Stack
                            direction={'row'}
                            spacing={1}
                            justifyContent={'center'}
                        >
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
                </Stack>
            </ProfileContainerStyle>
            <BannerContainerStyle>
                <BannerContainer>
                    <img src="/images/Publisher-banner-2.jpg" alt="" />
                </BannerContainer>
            </BannerContainerStyle>
        </ContainerStyle>
    );
};

export default PublicationCover;
