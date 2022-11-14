import { Stack } from '@mui/system';
import { useGetLogoQuery } from '../../store/features/singleType/logo/logoApi';
import { StyledLogoMark, StyledLogoText } from './Styles';

const Logo = () => {
  const { data: logoData } = useGetLogoQuery();
  return (
    <Stack direction={'row'} justifyContent="flex-start">
      <StyledLogoText variant="h2">
        {logoData?.data?.attributes?.text.slice(0, 5)}
      </StyledLogoText>
      <StyledLogoMark variant="h2">
        {logoData?.data?.attributes?.text.slice(5, 9)}
      </StyledLogoMark>
    </Stack>
  );
};

export default Logo;
