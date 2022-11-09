import { Stack, Typography } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

function LocationIcon() {
  return (
    <Stack
      direction="row"
      spacing={0.5}
      alignItems="center"
      sx={{ margin: '5px' }}
    >
      <Typography variant="caption">
        <FmdGoodIcon fontSize="small" color="primary" />
      </Typography>
      <Typography variant="caption">
        Dhaka Bangladesh Rajshahi Tangail Nouga
      </Typography>
    </Stack>
  );
}

export default LocationIcon;
