import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { InputLabel } from '@mui/material';

export default function Modal({ btnText }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>{btnText}</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={'sm'}
      >
        <DialogTitle>Update Address</DialogTitle>
        <DialogContent>
          <InputLabel color="secondary">
            <TextField fullWidth size="small" placeholder="title" />
            <br />
            <br />
            <TextField
              fullWidth
              size="small"
              placeholder="street, city, country"
              id="contact"
            />
          </InputLabel>
        </DialogContent>
        <DialogActions
          sx={{
            padding: '10px 25px 20px',
          }}
        >
          <Button variant="btnLogin" onClick={handleClose}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
