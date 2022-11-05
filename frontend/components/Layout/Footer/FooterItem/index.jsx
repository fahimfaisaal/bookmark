import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import Link from 'next/link';
import React from 'react';
import { shortId } from '../../../../uitls';
import { LinkContainer } from './Styles';

function FooterItem({ title, data }) {
  return (
    <Box>
      <Typography variant="h2" paddingBottom={4}>
        {title}
      </Typography>
      <Stack>
        {data.map((item) => (
          <Link key={shortId()} href={item.link}>
            <Box>
              <LinkContainer key={item.text}>{item.text}</LinkContainer>
            </Box>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

export default FooterItem;
