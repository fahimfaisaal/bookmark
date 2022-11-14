import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Head from 'next/head';
import { StyledGrid } from '../../components/UserDashboard/Styles';
import { useGetContactQuery } from '../../store/features/singleType/contact/contactApi';
import Form from './items/form';
import Information from './items/info';

function Contact() {
  const { data: contactData } = useGetContactQuery();
  return (
    <Container>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Bookmark application contact page" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/2/2f/Icon-green-line-b-default.svg"
        />
      </Head>
      <Grid container spacing={2} sx={{ paddingTop: 12, marginTop: -10 }}>
        <StyledGrid item xs={12} sm={12} md={4} lg={4}>
          <Information data={contactData} />
        </StyledGrid>
        <StyledGrid item xs={12} sm={12} md={8} lg={8}>
          <Form contactData={contactData} />
        </StyledGrid>
      </Grid>
    </Container>
  );
}

export default Contact;
