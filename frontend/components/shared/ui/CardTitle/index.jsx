import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const TitleContainerStyle = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  margin: '10px 0',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'all 0.4s',
  '&:hover': {
    color: `${theme.palette.text.third}`,
  },
}));

const CardTitle = ({ title, variant }) => {
  return <TitleContainerStyle variant={variant}>{title}</TitleContainerStyle>;
};

export default CardTitle;
