import { Box, Stack } from '@mui/system';
import Link from 'next/link';
import React from 'react';
import CardTitle from '../PublicationCard/CardTitle';
import { ImgContainerStyle } from './Styles';

const AuthorCard = ({author}) => {
  const {attributes: {name, avatar}} = author
  const url = `http://localhost:1337${avatar?.data?.attributes?.url}` || "/images/author-dummy.png";
  return (
    <Stack direction={'row'}>
      <Stack direction={'column'} alignItems={'center'}>
        <ImgContainerStyle>,
          <img src={url } alt={name} />
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
