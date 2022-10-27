import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormControlLabel, FormGroup } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from 'react';
import { FilterTitleStyle } from '../style';
import { ListContainerStyle } from './style';

export default function CheckboxList({ title, data }) {
  const [expanded, setExpanded] = useState(true);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      sx={{ boxShadow: 'none', backgroundColor: 'inherit' }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{ padding: '0' }}
      >
        <FilterTitleStyle variant="h3">{title}</FilterTitleStyle>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: '0' }}>
        <ListContainerStyle>
          <FormGroup>
            {data.map((item, index) => (
              <FormControlLabel
                control={<Checkbox defaultChecked={index === 0} />}
                label={item}
                name={item.toLowerCase()}
              />
            ))}
          </FormGroup>
        </ListContainerStyle>
      </AccordionDetails>
    </Accordion>
  );
}
