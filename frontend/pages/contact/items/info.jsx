import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SocialMediaIcons from '../../../components/Icons/SocialMedia';
import { StyledContainer } from '../../../components/UserDashboard/Styles';

const Information = ({ data }) => {
  return (
    <>
      <StyledContainer>
        <img src="/contact.svg" />
        {data?.attributes?.info?.info?.map((item) => (
          <Stack direction={'column'} sx={{ marginTop: 1 }} key={item.title}>
            <Typography variant="subtitle1">{item.title}</Typography>
            <Typography sx={{ paddingTop: 2 }} variant="body2">
              {item.text}
            </Typography>
          </Stack>
        ))}
        <Box sx={{ marginTop: -2, paddingBottom: 2 }}>
          <SocialMediaIcons />
        </Box>
      </StyledContainer>
    </>
  );
};

export default Information;
