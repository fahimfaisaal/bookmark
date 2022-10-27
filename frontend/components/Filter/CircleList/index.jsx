import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { InnerContainerStyle } from './style';
import { Radio } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

export default function RadioBoxList() {
    const [expanded, setExpanded] = React.useState('panel1');

    const expandHandleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
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
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{ padding: '0px 18px' }}
            >
                <Typography variant="h3">Sort</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0px' }}>
                <List sx={{ width: '100%' }}>
                    {[0, 1, 2, 3].map((value) => {
                        const labelId = `checkbox-list-label-${value}`;

                        return (
                            <InnerContainerStyle>
                                <ListItem
                                    key={value}
                                    autoFocus={false}
                                    disablePadding
                                >
                                    <ListItemIcon>
                                        <Radio
                                            edge="start"
                                            checked={
                                                checked.indexOf(value) !== -1
                                            }
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{
                                                'aria-labelledby': labelId,
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        id={labelId}
                                        primary={`Line item`}
                                    />
                                </ListItem>
                            </InnerContainerStyle>
                        );
                    })}
                </List>
            </AccordionDetails>
        </Accordion>
    );
}
