/** @format */

import { Stack } from '@mui/system';
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
        <CardTitle title={'Brandon T. Trigg'} variant={'h3'} />
      </Stack>
    </Stack>
  );
};

export default AuthorCard;
