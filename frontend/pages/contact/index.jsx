import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { StyledGrid } from '../../components/UserDashboard/Styles';
import Form from './items/form';
import Information from './items/info';

const getContactData = () => ({
  data: {
    id: 1,
    attributes: {
      heading: 'Questions, Comments, or Concerns?',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        description: 'Description'
      },
      createdAt: '2022-11-07T16:12:32.913Z',
      updatedAt: '2022-11-08T12:31:05.463Z',
      publishedAt: '2022-11-08T12:31:05.462Z',
      info: {
        info: [
          {
            text: 'NY, United States',
            title: 'Address'
          },
          {
            text: '+129290122122',
            title: 'Phone'
          },
          {
            text: 'https://bookmark.store',
            title: 'Website'
          },
          {
            text: '',
            title: 'Follow Us'
          }
        ]
      },
      buttons: {
        buttons: [
          {
            url: '/',
            text: 'Submit'
          }
        ]
      },
      image: {
        data: {
          id: 226,
          attributes: {
            name: 'contact.svg',
            alternativeText: 'contact.svg',
            caption: 'contact.svg',
            width: 299,
            height: 232,
            formats: null,
            hash: 'contact_d404ddaefe',
            ext: '.svg',
            mime: 'image/svg+xml',
            size: 28.45,
            url: '/uploads/contact_d404ddaefe.svg',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            createdAt: '2022-11-08T12:29:39.117Z',
            updatedAt: '2022-11-08T12:29:39.117Z'
          }
        }
      }
    }
  }
});

function Contact() {
  const { data: contactData } = getContactData();
  return (
    <Container>
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
