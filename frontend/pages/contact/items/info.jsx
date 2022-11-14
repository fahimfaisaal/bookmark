import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SocialMediaIcons from '../../../components/Icons/SocialMedia';
import { StyledContainer } from '../../../components/UserDashboard/Styles';

const Information = ({ data }) => {
  return (
    <>
      <StyledContainer>
        <img src="/contact.svg" alt="contact"/>
        {data?.data?.attributes?.info?.map((item) => (
          <Stack direction={'column'} sx={{ marginTop: 1 }} key={item.id}>
            <Typography variant="subtitle1">{item.heading}</Typography>

            <Typography sx={{ paddingTop: 2 }} variant="body2">
              {item.description}
            </Typography>
          </Stack>
        ))}
        <Box sx={{ marginTop: -2, paddingBottom: 2 }}>
          <SocialMediaIcons data={data} />
        </Box>
      </StyledContainer>
    </>
  );
};

export default Information;
