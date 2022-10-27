import { SearchContainer, InnerContainerStyle, IconContainer } from './style';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { InputBase, useTheme } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import Typography from '@mui/material/Typography';

export default function SearchBar({ normal }) {
    const theme = useTheme();

    const [focus, setFocus] = useState(false);
    const handleOnFocus = () => {
        setFocus(true);
    };
    const handleOnBlur = () => {
        setFocus(false);
    };

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <InnerContainerStyle>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'none',
                    width: '300px',
                    boxShadow: 'none',
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{ padding: '0px 18px' }}
                >
                    <Typography variant="h3">Search</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0px 18px' }}>
                    <SearchContainer
                        sx={
                            focus
                                ? {
                                      border: `1px solid ${theme.palette.primary.main}`,
                                  }
                                : {
                                      border: `1px solid ${theme.palette.background.dark}`,
                                  }
                        }
                        normal={normal}
                    >
                        <BiSearch />
                        <InputBase
                            placeholder="Search (type at least 3 chars)"
                            onFocus={handleOnFocus}
                            onBlur={handleOnBlur}
                        />
                    </SearchContainer>
                </AccordionDetails>
            </Accordion>
        </InnerContainerStyle>
    );
}
