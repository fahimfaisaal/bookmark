import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { InnerContainerStyle, PrettoSlider } from './style';
import myShadows from '../../../src/theme/shadows';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material';

function valuetext(value) {
    return `${value}`;
}

export default function RangeSlider() {
    const theme = useTheme();

    const [expanded, setExpanded] = React.useState('panel1');

    const expandHandleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [checked, setChecked] = React.useState([0]);

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Accordion
            expanded={expanded === 'panel1'}
            onChange={expandHandleChange('panel1')}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                background: 'none',
                width: '300px',
                boxShadow: 'none',
                // padding: '0px',
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{ padding: '0px 18px' }}
            >
                <Typography variant="h3">Sort By Price</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box>
                    <InnerContainerStyle>
                        <Typography variant="h3" my={2}>
                            Filter
                        </Typography>
                        {/* <PrettoSlider
                            getAriaLabel={() => 'Price range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                        /> */}

                        <Slider
                            getAriaLabel={() => 'Price range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            // sx={{ color: 'black' }}
                            // getAriaValueText={valuetext}
                        />
                    </InnerContainerStyle>
                    <InnerContainerStyle
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'left',
                                backgroundColor: 'common.white',
                                boxShadow: myShadows.box,
                                width: '133px',
                                height: '58px',
                                color: (theme) =>
                                    theme.palette.mode === 'dark'
                                        ? 'grey.300'
                                        : 'grey.800',
                                p: 1,
                                m: 1,
                                borderRadius: 2,
                                fontSize: '0.875rem',
                                fontWeight: '700',
                            }}
                        >
                            <Typography
                                variant="caption"
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    color: `${theme.palette.text.secondary}`,
                                }}
                            >
                                Min
                            </Typography>
                            {value[0]}
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'left',
                                backgroundColor: 'common.white',
                                boxShadow: myShadows.box,
                                width: '133px',
                                height: '58px',
                                color: (theme) =>
                                    theme.palette.mode === 'dark'
                                        ? 'grey.300'
                                        : 'grey.800',
                                p: 1,
                                m: 1,
                                borderRadius: 2,
                                fontSize: '0.875rem',
                                fontWeight: '700',
                            }}
                        >
                            <Typography
                                variant="caption"
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    color: `${theme.palette.text.secondary}`,
                                }}
                            >
                                Max
                            </Typography>
                            {value[1]}
                        </Box>
                    </InnerContainerStyle>
                </Box>
            </AccordionDetails>
        </Accordion>
    );
}
