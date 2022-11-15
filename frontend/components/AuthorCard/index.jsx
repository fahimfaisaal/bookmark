import { Box, Stack } from '@mui/system';
import Link from 'next/link';
import React from 'react';
import CustomImage from '../CustomImage';
import CardTitle from '../PublicationCard/CardTitle';
import { ImgContainerStyle } from './Styles';

function AuthorCard({ author }) {
  const {
    attributes: { name, avatar },
    id
  } = author;

  const url = avatar?.data?.attributes?.url || '/images/author-dummy.png';
  return (
    <Stack direction="row">
      <Stack direction="column" alignItems="center">
        <ImgContainerStyle>
          <CustomImage src={url} alt={name} width="180px" height="180px" />
        </ImgContainerStyle>
        <Link href={`/authors/${id}`}>
          <Box>
            <CardTitle title={name} variant="h3" />
          </Box>
        </Link>
      </Stack>
    </Stack>
  );
}

export default AuthorCard;
