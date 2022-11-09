import { Button } from '@mui/material';
import React from 'react';

function FormBtn({ children, color, disabled }) {
  return (
    <Button
      variant="contained"
      size="large"
      fullWidth
      disableElevation
      disabled={disabled}
      color={color}
      type="submit"
      sx={{
        padding: '12px 5px',
        margin: '5px 0',
        fontSize: '14px'
      }}
    >
      {children}
    </Button>
  );
}

export default FormBtn;
