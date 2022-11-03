import { Skeleton } from '@mui/material';
import { Stack } from '@mui/system';

const AuthorSkeleton = () => {
  return (
    <Stack alignItems={'center'} justifyContent={'center'}>
      <Skeleton width={150} height={150} variant={'circular'} />
      <Skeleton width={150} height={15} variant={'text'} />
    </Stack>
  );
};

export default AuthorSkeleton;
