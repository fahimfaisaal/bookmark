import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import React, { useState } from "react";
import SearchBar from "../../shared/SearchBar";
import { FilterTitleStyle } from "../style";

const SearchBarComp = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Box my={2}>
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
          <FilterTitleStyle variant="h2">Search</FilterTitleStyle>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0" }}>
          <SearchBar width="310px" placeholder="Search" />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default SearchBarComp;
