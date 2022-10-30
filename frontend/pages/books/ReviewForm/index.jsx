import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Rating from '@mui/material/Rating';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Stack } from '@mui/system';
import * as React from 'react';

const ReviewForm = ({ open, handleClose, handleClickOpen }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      // fullScreen={fullScreen}

      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{'Add a review'}</DialogTitle>
      <DialogContent sx={{ width: '400px' }}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          gap={3}
          my={3}
        >
          <Typography variant="h3">Your Rating</Typography>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </Stack>
        <Box>
          <Typography variant="h3" pb={1}>
            Your Review
          </Typography>
          <TextField multiline rows={10} fullWidth={true} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewForm;
