import { Box } from '@mui/material';
import Filter from '../../components/Filter';
import PublicationCover from '../../components/PublicationCover';

const PublicationItem = () => {
  return (
    <Box>
      <Filter />
      <PublicationCover />
    </Box>
  );
};

export default PublicationItem;
