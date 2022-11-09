import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';

function SocialMediaIcons() {
  return (
    <Box sx={{ width: '100px', margin: '5px' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={1}
        sx={{ cursor: 'pointer' }}
      >
        <FacebookIcon fontSize="small" color="primary" />
        <InstagramIcon fontSize="small" color="primary" />
        <TwitterIcon fontSize="small" color="primary" />
      </Stack>
    </Box>
  );
}

export default SocialMediaIcons;
