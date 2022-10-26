import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DialogHeader } from './Styles';

const Header = ({ subtitle }) => {
  return (
    <DialogHeader>
      <Box>
        <img src="/images/logo-1.png" alt="" width={210} height={35} />
      </Box>
      <Typography variant="body1" py={2}>
        {subtitle}
      </Typography>
    </DialogHeader>
  );
};

export default Header;
