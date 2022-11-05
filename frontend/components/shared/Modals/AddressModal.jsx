import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';

export default function AddressModal({ btnText, getData }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Handle Form =========================
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    watch,
    reset
  } = useForm({
    mode: 'onBlur',
    defaultValues: { title: '', address: '' }
  });
  const onSubmit = (data) => {
    console.log(data);
    getData({ ...data });
    reset();
  };
  // Handle Form =========================

  return (
    <>
      <Button onClick={handleClickOpen}>{btnText}</Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Update Address</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Box>
                  <TextField
                    sx={{ marginBottom: 1.6, marginTop: 1 }}
                    id="title"
                    fullWidth
                    name="title"
                    size="small"
                    label="Title"
                    error={Boolean(errors.title)}
                    {...register('title', { required: 'Title is required' })}
                    helperText={errors.title?.message}
                    type="text"
                    {...field}
                  />
                </Box>
              )}
            />
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <Box>
                  <TextField
                    sx={{ marginBottom: 1.6 }}
                    id="address"
                    fullWidth
                    name="address"
                    placeholder="stree, city, country.."
                    size="small"
                    label="Address"
                    error={Boolean(errors.address)}
                    {...register('address', {
                      required: 'Address is required'
                    })}
                    helperText={errors.address?.message}
                    type="text"
                    {...field}
                  />
                </Box>
              )}
            />
            <DialogActions>
              <Button
                type="submit"
                variant={
                  watch('title') || watch('address')
                    ? 'btnLogin'
                    : 'btnLoginDisabled'
                }
                disabled={!watch('title') && !watch('address')}
                onClick={handleClose}
              >
                Update
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
