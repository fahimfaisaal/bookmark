import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm, Controller } from 'react-hook-form';
import { Box } from '@mui/material';

export default function ContactModal({ btnText, getData }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Handle Form =========================
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    watch,
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: { contact: '' },
  });
  const onSubmit = (data) => {
    console.log(data);
    getData(data.contact); //state lifting
    reset();
  };
  //Handle Form =========================

  return (
    <>
      <Button onClick={handleClickOpen}>{btnText}</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={'sm'}
      >
        <DialogTitle>Contact Number</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="contact"
              control={control}
              render={({ field }) => (
                <Box>
                  <TextField
                    sx={{ marginBottom: 1.6, marginTop: 1 }}
                    id="contact"
                    fullWidth
                    name="contact"
                    size="small"
                    label={'contact'}
                    placeholder="+01...."
                    error={Boolean(errors.contact)}
                    {...register('contact', {
                      required: 'contact is required',
                    })}
                    helperText={errors.contact?.message}
                    type={'text'}
                    {...field}
                  />
                </Box>
              )}
            />

            <DialogActions>
              <Button
                type="submit"
                variant={watch('contact') ? 'btnLogin' : 'btnLoginDisabled'}
                disabled={!watch('contact')}
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
