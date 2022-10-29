import { Box, Stack } from '@mui/system';
import Link from 'next/link';
import React from 'react';
import CardTitle from '../PublicationCard/CardTitle';
import { ImgContainerStyle } from './Styles';

const AuthorCard = () => {
  return (
    <Stack direction={'row'}>
      <Stack direction={'column'} alignItems={'center'}>
        <ImgContainerStyle>
          <img src="/images/author-1.jpg" alt="" />
        </ImgContainerStyle>

        <Link href={'/authors/123'}>
          <Box>
            <CardTitle title={'Brandon T. Trigg'} variant={'h3'} />
          </Box>
        </Link>
      </Stack>
    </Stack>
  );
};

export default AuthorCard;
