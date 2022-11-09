import { Stack } from '@mui/system';
import { StyledLogoMark, StyledLogoText } from './Styles';

const Logo = () => {
  return (
    <Stack direction={'row'} justifyContent="flex-start">
      <StyledLogoText variant="h2">Book</StyledLogoText>
      <StyledLogoMark variant="h2">Mark</StyledLogoMark>
    </Stack>
  );
};

export default Logo;
