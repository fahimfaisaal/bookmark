import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import CustomImage from '../CutomImage';

// const SpanStyled = styled(span)`
//   font-weight: 600;
// `;

const AuthorProfile = ({ language, birthdate, description, title }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Box
        sx={{
          padding: '56px 56px',
          border: '0px solid #e5e7eb',
          backgroundColor: '#F3F4F6',
          width: '50%',
          minHeight: '400px',
          textAlign: 'center',
        }}
      >
        <CustomImage
          src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1607%2FAuthor-img-800-%25281%2529.jpg&w=1080&q=75"
          alt="Brandon T. Trigg"
          width="100%"
          height="100%"
        />
      </Box>
      <Box
        sx={{
          width: '50%',
          minHeight: '400px',
        }}
      >
        <Typography variant="h1">Brandon T. Trigg</Typography>
        <Typography variant="body2">
          All writers are vain, selfish and lazy, and at the very bottom of
          their motives lies a mystery. Writing a book is a long, exhausting
          struggle, like a long bout of some painful illness. One would never
          undertake such a thing if one were not driven by some demon whom one
          can neither resist nor understand An author is the creator or
          originator of any written work similar as a book or play, and is also
          considered a pen or minstrel. More astronomically defined, an author
          is"the person who began or gave actuality to anything"and whose
          authorship determines respons...
        </Typography>

        <Stack direction="row" alignItems="center" gap={1}>
          <Typography variant="subtitle2">Born:</Typography>
          <Typography variant="caption">24 October, 1995</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography variant="subtitle2">Language: </Typography>
          <Typography variant="caption">English</Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default AuthorProfile;
