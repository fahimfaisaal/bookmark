import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

// const steps = [
//   'Order Received',
//   'Order Processing',
//   'Order Dispatched',
//   'At Local Facility'
// ];

const steps = ['PLACED', 'PROCESSING', 'DELIVERED'];

function ProgressBar({ status }) {
  const activeStep =
    status === 'PLACED'
      ? 0
      : status === 'PROCESSING'
      ? 1
      : status === 'DELIVERED'
      ? 2
      : 5;
  return (
    status && (
      <Box sx={{ width: '100%', marginTop: '10px' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel sx={{ textTransform: 'capitalize' }}>
                Order {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    )
  );
}

export default ProgressBar;
