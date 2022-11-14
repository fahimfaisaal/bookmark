import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';

function SocialMediaIcons({ data }) {
  return (
    <Box sx={{ width: '100px', margin: '5px' }}>
      {data?.data?.attributes?.icons?.map((item) => (
        <Stack
          key={item.id}
          direction="row"
          justifyContent="space-between"
          spacing={1}
          sx={{ cursor: 'pointer' }}
        >
          <Link href={item.url}>
            {item.name === 'facebook' ? (
              <FacebookIcon fontSize="small" color="primary" />
            ) : (
              ''
            )}
          </Link>
          <Link href={item.url}>
            {item.name === 'facebook' ? (
              <InstagramIcon fontSize="small" color="primary" />
            ) : (
              ''
            )}
          </Link>
          <Link href={item.url}>
            {item.name === 'facebook' ? (
              <TwitterIcon fontSize="small" color="primary" />
            ) : (
              ''
            )}
          </Link>
        </Stack>
      ))}
    </Box>
  );
}

export default SocialMediaIcons;
