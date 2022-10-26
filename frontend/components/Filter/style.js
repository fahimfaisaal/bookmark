import { Link } from '@mui/material';
import { Box, styled } from '@mui/system';
import myShadows from '../../src/theme/shadows';

export const ContainerStyle = styled(Box)(({ theme }) => ({
    boxShadow: `${myShadows.box}`,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    width: '318px',
}));

export const InnerContainerStyle = styled(Box)(({ theme, style }) => ({
    display: 'flex',
    alignItems: 'center',
    height: 'auto',
    width: '288px',
    margin: '0px 36px',
    ...style,
}));

export const LinkContainer = styled(Link)(({ theme }) => ({
    cursor: 'pointer',
    fontSize: '17px',
    fontWeight: '600',
    padding: '4px 4px',
    align: 'right',
    textDecoration: 'none',
    color: `${theme.palette.text.secondary}`,
    '&:hover': {
        color: `${theme.palette.primary.main}`,
    },
}));
