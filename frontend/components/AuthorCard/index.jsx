import { Avatar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import myShadows from '../../src/theme/shadows';

const AuthorCard = ({ title, image }) => {
  return (
    <Stack>
      <Avatar
        alt="Rezuan"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW8SpKYYlvf8m-fbYPhzeB3jbIMkBW-4QH2g&usqp=CAU"
        sx={{
          width: 100,
          height: 100,
          boxShadow: myShadows.avatar,
        }}
      />
      <Typography variant="subtitle2" sx={{ mt: 1 }}>
        Jahid Hasan Bangladesh
      </Typography>
    </Stack>
  );
};

export default AuthorCard;
