import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import * as React from 'react';

const RadioButtonsGroup = () => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="newRelised"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="newRelised"
          control={<Radio />}
          label="New Relised"
        />
        <FormControlLabel
          value="low2High"
          control={<Radio />}
          label="Sort by price: Low to High"
        />
        <FormControlLabel
          value="high2Low"
          control={<Radio />}
          label="Sort by price: High to Low"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonsGroup;
