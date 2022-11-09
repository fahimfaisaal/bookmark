import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Logo from '../../Logo';
import { DialogHeader } from './Styles';

function Header({ subtitle }) {
  return (
    <DialogHeader>
      <Box>
        <Logo />
      </Box>
      <Typography variant="body1" py={2}>
        {subtitle}
      </Typography>
    </DialogHeader>
  );
}

export default Header;
