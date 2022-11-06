import { Box, Skeleton, Stack } from '@mui/material';

const BookSkeleton = () => {
  return (
    <>
      <Skeleton width={'100%'} height={300} variant="rectangular" />
      <Box py={'5px'}>
        <Skeleton width={'100%'} height={50} variant="text" />
      </Box>
      <Skeleton width={'60%'} height={15} variant="text" />
      <Skeleton width={'40%'} height={15} variant="text" />
      {/* <Skeleton width={'25%'} height={25} variant="text" /> */}
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        my={2}
      >
        <Skeleton width={80} height={35} variant={'rounded'} />
        <Skeleton width={40} height={40} variant={'circular'} />
      </Stack>
    </>
  );
};

export default BookSkeleton;
