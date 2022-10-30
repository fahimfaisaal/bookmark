import { Stack } from '@mui/system';
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
        <CardTitle title={name} variant={'h3'} />
      </Stack>
    </Stack>
  );
};

export default AuthorCard;
