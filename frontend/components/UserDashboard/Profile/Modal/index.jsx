import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { InputLabel, Typography } from '@mui/material';

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
    <div>
      <Button onClick={handleClickOpen}>{btnText}</Button>
      <Dialog maxWidth="lg" open={open} onClose={handleClose}>
        <Typography variant="h3">Update Contact Number</Typography>
        <DialogContent>
          <InputLabel htmlFor="contact" color="secondary">
            Contact Number
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="+8801..."
            id="contact"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="btnGreen" onClick={handleClose}>
            Update Contact Number
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
