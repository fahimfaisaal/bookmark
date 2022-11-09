import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import React, { useState } from 'react';
import RadioButtonsGroup from '../RadioButtonsGroup';
import { FilterTitleStyle } from '../style';

export default function RadioBoxList() {
  const [expanded, setExpanded] = useState(true);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      sx={{ boxShadow: 'none', backgroundColor: 'inherit', margin: '0' }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{ padding: '0px' }}
      >
        <FilterTitleStyle variant="h2">Sort</FilterTitleStyle>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: '0px' }}>
        <RadioButtonsGroup />
      </AccordionDetails>
    </Accordion>
  );
}
