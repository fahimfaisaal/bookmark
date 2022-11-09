import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { StyledCard, StyledContainer, StyledDate } from './Styles';

function ReviewCard() {
  return (
    <StyledCard>
      <StyledContainer variant="btnDark">
        5 <FaRegStar />{' '}
      </StyledContainer>

      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ margin: '10px 0' }}
      >
        <Typography variant="caption">by</Typography>
        <Typography variant="subtitle2">Brandon T.Trigg</Typography>
      </Stack>

      <Typography variant="body2" sx={{ mt: 1 }}>
        Five star all the way. Love the story
      </Typography>

      <StyledDate variant="caption">Date: October 19, 2022</StyledDate>
    </StyledCard>
  );
}

export default ReviewCard;
