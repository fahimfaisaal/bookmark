import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { debounce, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Stack } from "@mui/system";
import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePriceRange } from "../../../store/features/filter/filterSlice";
import { FilterTitleStyle } from "../style";
import { PriceRangeContainer } from "./style";

export default function RangeSlider() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(true);
  const dispatch = useDispatch();

  const handleAccordion = () => {
    setExpanded(!expanded);
  };

  const [value, setValue] = React.useState([10, 5000]);
  const defferedValue = React.useDeferredValue(value);

  React.useEffect(() => {
    dispatch(updatePriceRange({ range: defferedValue }));
    console.log({ defferedValue });
  }, [defferedValue]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleAccordion}
      sx={{ boxShadow: "none", backgroundColor: "inherit" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{ padding: "0" }}
      >
        <FilterTitleStyle variant="h2">Sort By Price</FilterTitleStyle>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: "0" }}>
        <Box>
          <Slider
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            step={10}
            min={10}
            max={2000}
          />

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={2}
          >
            <PriceRangeContainer>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: `${theme.palette.text.secondary}`,
                  marginBottom: "5px",
                }}
              >
                Min
              </Typography>
              {value[0]}
            </PriceRangeContainer>
            <PriceRangeContainer>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: `${theme.palette.text.secondary}`,
                  marginBottom: "5px",
                }}
              >
                Max
              </Typography>
              {value[1]}
            </PriceRangeContainer>
          </Stack>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
