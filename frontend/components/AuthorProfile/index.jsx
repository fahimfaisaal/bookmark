import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import CustomImage from '../CustomImage';
import { HeaderStyle, StyledBox } from './Styles';

function AuthorProfile({ authorInfo }) {
  // console.log({ profile: authorInfo });
  const avaterUrl =
    (authorInfo?.avatar?.data && authorInfo?.avatar?.data?.attributes?.url) ||
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
              {authorInfo?.birth || '24 October, 1980'}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={2}>
            <Typography variant="h2">Languages: </Typography>
            <Typography variant="body1" pt="5px">
              {authorInfo?.languages || 'English, Bangla'}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default AuthorProfile;
