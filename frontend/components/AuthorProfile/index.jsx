import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import CustomImage from '../CustomImage';
import { HeaderStyle, StyledBox } from './Styles';

function AuthorProfile({ authorInfo }) {
  // console.log({ profile: authorInfo });
  const avaterUrl =
    (authorInfo?.avatar?.data &&
      `http://localhost:1337${authorInfo?.avatar?.data?.attributes?.url}`) ||
    '/images/publisher-logo.png';

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} lg={6}>
        <StyledBox>
          <CustomImage src={avaterUrl} alt={authorInfo?.name} />
        </StyledBox>
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <Stack direction="column" spacing={3}>
          <HeaderStyle variant="h1">{authorInfo?.name}</HeaderStyle>
          <Typography variant="body2">{authorInfo?.bio}</Typography>

          <Stack direction="row" alignItems="center" gap={2}>
            <Typography variant="h2">Born :</Typography>
            <Typography variant="body1" pt="5px">
              24 October, 1995
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={2}>
            <Typography variant="h2">Language: </Typography>
            <Typography variant="body1" pt="5px">
              English
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default AuthorProfile;
