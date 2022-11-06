import {
  Box,
  Button,
  Container,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import { useForm, Controller } from 'react-hook-form';
import { StyledContainer } from '../../../components/UserDashboard/Styles';

const Form = () => {
  //Handle Form ===================

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: { name: '', email: '', subject: '', description: '' },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  //Handle Form ===================
  return (
    <>
      <StyledContainer>
        <Typography variant="h2" fontWeight={800}>
          Questions, Comments, or Concerns?
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Box>
                <InputLabel
                  color="secondary"
                  htmlFor="description"
                  sx={{ marginTop: 2, paddingBottom: 1, fontWeight: 600 }}
                >
                  Name
                </InputLabel>
                <TextField
                  fullWidth
                  name="name"
                  label={'Name'}
                  error={Boolean(errors.name)}
                  {...register('name', {
                    required: 'Name is required',
                  })}
                  helperText={errors.name?.message}
                  type={'text'}
                  {...field}
                />
              </Box>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Box>
                <InputLabel
                  color="secondary"
                  htmlFor="description"
                  sx={{ marginTop: 2, paddingBottom: 1, fontWeight: 600 }}
                >
                  Email
                </InputLabel>
                <TextField
                  fullWidth
                  name="email"
                  label={'Email'}
                  error={Boolean(errors.email)}
                  {...register('email', {
                    required: 'Email is required',
                  })}
                  helperText={errors.email?.message}
                  type={'email'}
                  {...field}
                />
              </Box>
            )}
          />
          <Controller
            name="subject"
            control={control}
            render={({ field }) => (
              <Box>
                <InputLabel
                  color="secondary"
                  htmlFor="description"
                  sx={{ marginTop: 2, paddingBottom: 1, fontWeight: 600 }}
                >
                  Subject
                </InputLabel>
                <TextField
                  fullWidth
                  name="subject"
                  label={'Subject'}
                  error={Boolean(errors.subject)}
                  {...register('subject', {
                    required: 'Subject is required',
                  })}
                  helperText={errors.subject?.message}
                  type={'subject'}
                  {...field}
                />
              </Box>
            )}
          />

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Box>
                <InputLabel
                  color="secondary"
                  htmlFor="description"
                  sx={{ marginTop: 2, paddingBottom: 1, fontWeight: 600 }}
                >
                  Description
                </InputLabel>
                <TextField
                  sx={{ marginBottom: 1.6 }}
                  id="description"
                  fullWidth
                  name="description"
                  label={'Description'}
                  error={Boolean(errors.description)}
                  rows={4}
                  multiline
                  {...register('description', {
                    required: 'Description is required',
                  })}
                  helperText={errors.description?.message}
                  type={'text'}
                  {...field}
                />
              </Box>
            )}
          />

          <Box>
            <Button
              variant="btnGreen"
              type="submit"
              sx={{ padding: '12px 25px' }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </StyledContainer>
    </>
  );
};

export default Form;
