import { Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SocialMediaIcons from '../../../components/Icons/SocialMedia';
import { StyledContainer } from '../../../components/UserDashboard/Styles';

const contactDetail = [
  {
    id: 1,
    title: 'Address',
    info: 'NY, United States',
  },
  {
    id: 2,
    title: 'Phone',
    info: '+129290122122',
  },
  {
    id: 3,
    title: 'Website',
    info: 'https://bookmark.store',
  },
];

const Information = () => {
  return (
    <>
      <StyledContainer>
        <img src="/contact.svg" />
        {contactDetail.map((item) => (
          <Stack direction={'column'} sx={{ marginTop: 1 }} key={item.id}>
            <Typography variant="subtitle1">{item.title}</Typography>
            <Typography sx={{ paddingTop: 2 }} variant="body2">
              {item.info}
            </Typography>
          </Stack>
        ))}
        <Box>
          <Typography sx={{ paddingBottom: 1 }} variant="subtitle1">
            Follow Us
          </Typography>
          <SocialMediaIcons />
        </Box>
      </StyledContainer>
    </>
  );
};

export default Information;
