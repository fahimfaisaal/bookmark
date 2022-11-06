import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, InputLabel } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyledContainer } from '../../Styles';
import { StyledBox, StyledInput, StyledLabel } from './Styles';

function InputField() {
  // Handle Form =========================
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset
  } = useForm({
    mode: 'onBlur',
    defaultValues: { name: '', bio: '' }
  });
  const onValid = (data) => {
    console.log(data);
    reset();
  };
  // Handle Form =========================

  return (
    <StyledContainer sx={{ boxShadow: 3 }}>
      <form onSubmit={handleSubmit(onValid)}>
        <Controller
          name="file"
          control={control}
          render={() => (
            <StyledBox>
              <StyledLabel>
                <Box>
                  <CloudUploadIcon color="disabled" fontSize="large" />
                </Box>
                <StyledInput type="file" /> Upload an image
              </StyledLabel>
            </StyledBox>
          )}
        />
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Box>
              <InputLabel
                color="secondary"
                htmlFor="name"
                sx={{ marginTop: 2, paddingBottom: 1 }}
              >
                Name
              </InputLabel>
              <TextField
                sx={{ marginBottom: 1.6 }}
                id="name"
                fullWidth
                name="name"
                label="Name"
                error={Boolean(errors.name)}
                {...register('name', { required: 'Name is required' })}
                helperText={errors.name?.message}
                type="text"
                {...field}
              />
            </Box>
          )}
        />
        <Controller
          name="bio"
          control={control}
          render={({ field }) => (
            <Box>
              <InputLabel
                color="secondary"
                htmlFor="bio"
                sx={{ marginTop: 2, paddingBottom: 1 }}
              >
                Bio
              </InputLabel>
              <TextField
                sx={{ marginBottom: 1.6 }}
                id="bio"
                fullWidth
                name="bio"
                label="Bio"
                error={Boolean(errors.bio)}
                rows={4}
                multiline
                {...register('bio', { required: 'Bio is required' })}
                helperText={errors.bio?.message}
                type="text"
                {...field}
              />
            </Box>
          )}
        />

        <Box textAlign="right">
          <Button type="submit" variant="btnGreen">
            Save
          </Button>
        </Box>
      </form>
    </StyledContainer>
  );
}

export default InputField;
