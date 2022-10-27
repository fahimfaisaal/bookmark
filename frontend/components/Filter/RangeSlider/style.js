import { Box, styled } from '@mui/system';
import Slider from '@mui/material/Slider';

export const InnerContainerStyle = styled(Box)(({ theme, style }) => ({
    width: '288px',
    padding: '0px 18px',
    ...style,
}));