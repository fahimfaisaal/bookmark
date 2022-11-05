import { Box, Menu, MenuItem, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { AiFillCheckCircle, AiFillStar, AiOutlineMore } from 'react-icons/ai';
import { IconMenuContainer, ReviewPointStyle } from './Styles';

function ReviewItem(rating) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const date = new Date(rating?.rating?.attributes?.createdAt);
  return (
    <Box my={2} mb={5}>
      <ReviewPointStyle>
        <Typography variant="h2">{rating?.rating?.attributes?.rate}</Typography>
        <Typography variant="h3">
          <AiFillStar />
        </Typography>
      </ReviewPointStyle>
      <Typography variant="body2" py={2}>
        by {rating?.rating?.attributes?.userId?.data?.attributes?.username}{' '}
        <AiFillCheckCircle />
      </Typography>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h2" fontWeight="400" mb={3}>
          {rating?.rating?.attributes?.comment}
        </Typography>
        {false && (
          <IconMenuContainer
            variant="h2"
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <AiOutlineMore />
          </IconMenuContainer>
        )}
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button'
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Typography variant="h4">Edit</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography variant="h4">Delete</Typography>
          </MenuItem>
        </Menu>
      </Stack>

      <Typography variant="body2">{date.toUTCString()}</Typography>
    </Box>
  );
}

export default ReviewItem;
