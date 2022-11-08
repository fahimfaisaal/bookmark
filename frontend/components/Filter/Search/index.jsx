import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, debounce } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addSearch,
  getSearchText
} from '../../../store/features/filter/filterSlice';
import SearchBar from '../../shared/SearchBar';
import { FilterTitleStyle } from '../style';

const SearchBarComp = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const filterSearch = useSelector(getSearchText);
  const dispatch = useDispatch();

  useEffect(() => {
    if ('search' in router.query) {
      setExpanded(true);
    }
  }, [router.query]);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const changeHandler = (value) => {
    dispatch(addSearch(value));
  };

  return (
    <Box my={2}>
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
          <FilterTitleStyle variant="h2">Search</FilterTitleStyle>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '0' }}>
          <SearchBar
            placeholder="Search"
            initialState={filterSearch}
            searchHandler={debounce(changeHandler, 800)}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default SearchBarComp;
