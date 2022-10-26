import { InputLabel, Typography } from '@mui/material';
import AddressCard from '../../../AddressCard';
import { StyledContainer } from '../../Styles';

const Address = () => {
  return (
    <StyledContainer>
      <InputLabel color="secondary">Addresses</InputLabel>
      <AddressCard />
    </StyledContainer>
  );
};

export default Address;
