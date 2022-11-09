import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { StyledContainer } from '../../../components/UserDashboard/Styles';

const Form = ({ contactData }) => {
  //Handle Form ===================

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset
  } = useForm({
    mode: 'onBlur',
    defaultValues: { name: '', email: '', subject: '', description: '' }
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
          {contactData?.attributes?.heading}
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
                  {contactData?.attributes?.form?.name}
                </InputLabel>
                <TextField
                  fullWidth
                  name="name"
                  label={contactData?.attributes?.form?.name}
                  error={Boolean(errors.name)}
                  {...register('name', {
                    required: 'Name is required'
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
                  {contactData?.attributes?.form?.email}
                </InputLabel>
                <TextField
                  fullWidth
                  name="email"
                  label={contactData?.attributes?.form?.email}
                  error={Boolean(errors.email)}
                  {...register('email', {
                    required: 'Email is required'
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
                  {contactData?.attributes?.form?.subject}
                </InputLabel>
                <TextField
                  fullWidth
                  name="subject"
                  label={contactData?.attributes?.form?.subject}
                  error={Boolean(errors.subject)}
                  {...register('subject', {
                    required: 'Subject is required'
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
                  {contactData?.attributes?.form?.description}
                </InputLabel>
                <TextField
                  sx={{ marginBottom: 1.6 }}
                  id="description"
                  fullWidth
                  name="description"
                  label={contactData?.attributes?.form?.description}
                  error={Boolean(errors.description)}
                  rows={4}
                  multiline
                  {...register('description', {
                    required: 'Description is required'
                  })}
                  helperText={errors.description?.message}
                  type={'text'}
                  {...field}
                />
              </Box>
            )}
          />

          {contactData?.attributes?.buttons?.buttons?.map((item) => (
            <Button
              key={item.text}
              variant="btnGreen"
              type="submit"
              sx={{
                padding: '12px 25px',
                marginTop: '.8rem',
                marginBottom: '1.5rem'
              }}
            >
              {item.text}
            </Button>
          ))}
        </form>
      </StyledContainer>
    </>
  );
};

export default Form;
