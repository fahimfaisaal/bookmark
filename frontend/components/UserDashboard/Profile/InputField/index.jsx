import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, InputLabel } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyledContainer } from '../../Styles';
// import ImageUploadCard from './ImageUpload';
import CloseIcon from '@mui/icons-material/Close';
import CustomImage from '../../../CustomImage';
import { StyledBox, StyledLabel } from './Styles';

const initialValues = {
  username: '',
  avatar: ''
};

function InputField({ profileData }) {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  // Handle Form =========================
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset
  } = useForm({
    mode: 'onBlur',
    defaultValues: { ...initialValues }
  });
  const onSubmit = (data) => {
    console.log({ data });
    reset(initialValues);
  };

  const imageUpload = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };
  const imageUploadOnchange = (event) => {
    const file = event.target.files[0];
    console.log({ file });
    if (file && file.type.substring(0, 5) === 'image') {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  useEffect(() => {
    if (profileData) {
      reset({
        username: profileData?.username,
        avatar: profileData?.avatar?.url
      });
    } else {
      reset(initialValues);
    }
  }, [profileData]);

  // console.log({image, preview})

  // Handle Form =========================

  return (
    <StyledContainer sx={{ boxShadow: 3 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="avatar"
          control={control}
          render={() => {
            return preview ? (
              <>
                <CustomImage
                  src={preview}
                  style={{
                    objectFit: 'cover',
                    width: '200px',
                    height: '200px'
                  }}
                />
                <CloseIcon
                  sx={{ position: 'absolute', cursor: 'pointer' }}
                  onClick={() => {
                    setImage(null);
                  }}
                />
              </>
            ) : (
              <StyledBox>
                <StyledLabel>
                  <Box>
                    <CloudUploadIcon
                      color="disabled"
                      fontSize="large"
                      onClick={imageUpload}
                    />
                  </Box>

                  <input
                    type="file"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={imageUploadOnchange}
                  />
                </StyledLabel>
              </StyledBox>
            );
          }}
        />

        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Box>
              <InputLabel
                color="secondary"
                htmlFor="username"
                sx={{ marginTop: 2, paddingBottom: 1 }}
              >
                Username
              </InputLabel>
              <TextField
                sx={{ marginBottom: 1.6 }}
                id="username"
                fullWidth
                name="username"
                label="Username"
                value={profileData?.username || 'Jony'}
                defaultValue={'hello'}
                error={Boolean(errors.username)}
                {...register('username', { required: 'username is required' })}
                helperText={errors.username?.message}
                type="text"
                {...field}
              />
            </Box>
          )}
        />
        {/* <Controller
          username="bio"
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
                username="bio"
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
        /> */}

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
