import { Button, InputLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Controller, useForm } from 'react-hook-form';
import { StyledContainer } from './Styles';

function ChangePassword() {
  // Handle Form =========================
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset
  } = useForm({
    mode: 'onBlur',
    defaultValues: { oldPassword: '', newPassword: '', confirmPassword: '' }
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  // Handle Form =========================
  return (
    <StyledContainer sx={{ boxShadow: 3 }}>
      <Typography variant="h2">Change Password</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="oldPassword"
          control={control}
          render={({ field }) => (
            <>
              <InputLabel
                color="secondary"
                htmlFor="old-pass"
                sx={{ marginTop: 2, paddingBottom: 1 }}
              >
                Old Password
              </InputLabel>
              <TextField
                sx={{ marginBottom: 1.6 }}
                fullWidth
                name="oldPassword"
                size="small"
                placeholder="*********"
                id="old-pass"
                error={Boolean(errors.oldPassword)}
                {...register('oldPassword', {
                  required: 'Old Password is required'
                })}
                helperText={errors.oldPassword?.message}
                type="password"
                {...field}
              />
            </>
          )}
        />
        <Controller
          name="newPassword"
          control={control}
          render={({ field }) => (
            <>
              <InputLabel
                color="secondary"
                htmlFor="newPassword"
                sx={{ marginTop: 2, paddingBottom: 1 }}
              >
                New Password
              </InputLabel>
              <TextField
                sx={{ marginBottom: 1.6 }}
                fullWidth
                name="newPassword"
                size="small"
                placeholder="*********"
                id="newPassword"
                error={Boolean(errors.newPassword)}
                {...register('newPassword', {
                  required: 'New Password is required'
                })}
                helperText={errors.newPassword?.message}
                type="password"
                {...field}
              />
            </>
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <>
              <InputLabel
                color="secondary"
                htmlFor="confirmPassword"
                sx={{ marginTop: 2, paddingBottom: 1 }}
              >
                Confirm Password
              </InputLabel>
              <TextField
                sx={{ marginBottom: 1.6 }}
                fullWidth
                name="confirmPassword"
                size="small"
                placeholder="*********"
                id="confirmPassword"
                error={Boolean(errors.confirmPassword)}
                {...register('confirmPassword', {
                  required: 'Confirm Password is required'
                })}
                helperText={errors.confirmPassword?.message}
                type="password"
                {...field}
              />
            </>
          )}
        />
        <Box textAlign="right">
          <Button type="submit" variant="btnGreen">
            Submit
          </Button>
        </Box>
      </form>

      {/* <InputLabel color="secondary" htmlFor="new-pass">
          New Password
        </InputLabel>
        <TextField
          size="small"
          fullWidth
          placeholder="*********"
          id="new-pass"
        />

        <InputLabel color="secondary" htmlFor="confirm-pass">
          Confirm Password
        </InputLabel>
        <TextField
          size="small"
          fullWidth
          placeholder="*********"
          id="confirm-pass"
        /> */}
    </StyledContainer>
  );
}

export default ChangePassword;
