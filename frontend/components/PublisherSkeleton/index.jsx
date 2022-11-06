import { Box, Skeleton } from '@mui/material';
import { Stack } from '@mui/system';

const PublisherSkeleton = () => {
  return (
    <Box
      m={3}
      sx={{
        width: '90%',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        padding: '12px 15px'
      }}
    >
      <Stack direction={'row'} gap={2} alignItems={'center'}>
        <Skeleton width={80} height={80} variant={'circular'} />
        <Box>
          <Skeleton width={'100%'} height={15} variant={'text'} />
          <Stack
            direction={'row'}
            alignItems={'center'}
            py={'10px'}
            gap={'5px'}
          >
            <Skeleton width={30} height={30} variant={'circular'} />
            <Skeleton width={30} height={30} variant={'circular'} />
            <Skeleton width={30} height={30} variant={'circular'} />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default PublisherSkeleton;
