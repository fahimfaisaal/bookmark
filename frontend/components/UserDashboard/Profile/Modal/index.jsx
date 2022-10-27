import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { InputLabel } from '@mui/material';

// #D1D5DB

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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Number</DialogTitle>
        <DialogContent>
          <InputLabel htmlFor="contact" color="secondary">
            <TextField size="small" placeholder="+8801..." id="contact" />
          </InputLabel>
        </DialogContent>
        <DialogActions>
          <Button variant="btnGreen" onClick={handleClose}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
