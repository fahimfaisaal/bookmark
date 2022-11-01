import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControlLabel, FormGroup } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import { FilterTitleStyle } from "../style";
import { ListContainerStyle } from "./style";

export default function CheckboxList({ title, data, selectItems, setItem }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const handleCheckChange = (e) => {
    setItem(e.target.name.split(":"));
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      sx={{ boxShadow: "none", backgroundColor: "inherit" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{ padding: "0" }}
      >
        <FilterTitleStyle variant="h3">{title}</FilterTitleStyle>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: "0" }}>
        <ListContainerStyle>
          <FormGroup>
            {data?.map((item, index) => (
              <FormControlLabel
                key={item?.id ?? index}
                control={
                  <Checkbox
                    checked={selectItems.has(String(item.id ?? item))}
                    onChange={handleCheckChange}
                  />
                }
                label={item.name ?? item}
                name={item?.id ? `${item.id}:${item.name}` : item}
              />
            ))}
          </FormGroup>
        </ListContainerStyle>
      </AccordionDetails>
    </Accordion>
  );
}
