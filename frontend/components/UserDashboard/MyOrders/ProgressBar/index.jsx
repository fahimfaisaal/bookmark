import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Order Received',
  'Order Processing',
  'Order Dispatched',
  'At Local Facility',
];

const ProgressBar = () => {
  return (
    <Box sx={{ width: '100%', marginTop: '10px' }}>
      <Stepper activeStep={0} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default ProgressBar;
