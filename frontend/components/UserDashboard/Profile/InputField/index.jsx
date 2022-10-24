import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, InputLabel } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { StyledBox, StyledInput, StyledLabel } from './Styles';
import { Stack } from '@mui/system';
import { StyledContainer } from '../../Styles';

const InputField = () => {
  return (
    <StyledContainer>
      <Stack direction={'column'} spacing={2}>
        <StyledBox>
          <StyledLabel>
            <Box>
              <CloudUploadIcon color="disabled" fontSize="large" />
            </Box>
            <StyledInput type="file" /> Upload an image
          </StyledLabel>
        </StyledBox>

        <InputLabel color="secondary" htmlFor="name">
          Name
        </InputLabel>
        <TextField fullWidth placeholder="Name" id="name" />

        <InputLabel color="secondary" htmlFor="bio">
          Bio
        </InputLabel>
        <TextField fullWidth id="bio" placeholder="Bio" rows={4} multiline />

        <Box textAlign={'right'}>
          <Button variant="btnGreen">Save</Button>
        </Box>
      </Stack>
    </StyledContainer>
  );
};

export default InputField;
