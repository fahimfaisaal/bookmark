import { Link } from '@mui/material';
import { Box, styled } from '@mui/system';
import myShadows from '../../src/theme/shadows';

export const ContainerStyle = styled(Box)(({ theme }) => ({
    boxShadow: `${myShadows.box}`,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    height: '280px',
    width: '720px',
}));

export const ProfileContainerStyle = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '280px',
    width: '240px',
}));

export const DetailsContainerStyle = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '103px',
    width: '186px',
}));

export const BannerContainerStyle = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    height: '280px',
    width: '480px',
}));

export const LogoContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    img: {
        width: '124px',
        height: '124px',
        borderRadius: '50%',
    },
}));

export const BannerContainer = styled(Box)(() => ({
    img: {
        width: '480px',
        height: '162px',
        display: 'flex',
        alignItems: 'right',
    },
}));

export const LinkContainer = styled(Link)(({ theme, style }) => ({
    cursor: 'pointer',
    fontSize: '17px',
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 4px 18px 4px',
    // TODO: Need an optimal solution for this padding issue.
    color: `${theme.palette.text.secondary}`,
    '&:hover': {
        color: `${theme.palette.primary.main}`,
    },
    ...style,
}));
