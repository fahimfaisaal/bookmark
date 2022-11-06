import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { StyledGrid } from '../../components/UserDashboard/Styles';
import Form from './items/form';
import Information from './items/info';

const Contact = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ paddingTop: 12, marginTop: -10 }}>
        <StyledGrid item xs={12} sm={12} md={4} lg={4}>
          <Information />
        </StyledGrid>
        <StyledGrid item xs={12} sm={12} md={8} lg={8}>
          <Form />
        </StyledGrid>
      </Grid>
    </Container>
  );
};

export default Contact;
