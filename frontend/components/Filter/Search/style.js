import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const InnerContainerStyle = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    width: '288px',
    padding: '0px 18px',
    marginBottom: '24px',
}));

export const SearchContainer = styled(Box)(({ theme, normal }) => ({
    background: `${theme.palette.background.dark}`,
    border: `1px solid ${theme.palette.background.dark}`,
    borderRadius: '7px',
    padding: '8px 8px',
    display: 'flex',
    alignItems: 'center',
    svg: {
        color: `${theme.palette.text.secondary}`,
        fontSize: '22px',

        cursor: 'pointer',
        marginRight: '10px',
        '&:hover': {
            color: `${theme.palette.action.hover}`,
        },
    },
    input: {
        width: '220px',
        '&:focus': {
            // color: `${theme.palette.primary.main}`,
        },
    },
    [theme.breakpoints.down('lg')]: {
        display: `${normal ? 'none' : ''}`,
    },
}));

export const IconContainer = styled(Box)(({ theme, fontSize }) => ({
    color: `${theme.palette.text.primary}`,
    // fontSize: "28px",
    fontSize: `${fontSize}`,
    cursor: 'pointer',
}));
