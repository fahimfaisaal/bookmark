import { Box, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import { useGetFooterQuery } from '../../../store/features/singleType/footer/footerApi';
import Logo from '../../Logo';
import { LogoContainer } from '../NavBar/Styles';
import FooterItem from './FooterItem';
import {
  FooterBottomContainer,
  FooterContainer,
  PaymentImgContainer
} from './Styles';

function Footer() {
  const { data: footerData } = useGetFooterQuery();

  return (
    <FooterContainer>
      <Grid container spacing={5}>
        <Grid item lg={3} md={6} xs={12}>
          <Link href="/">
            <LogoContainer>
              <Logo />
            </LogoContainer>
          </Link>
          <Typography variant="body2" py={3} fontWeight={400}>
            {footerData?.data?.attributes?.address}
          </Typography>
          <Box py={3}>
            <Typography variant="body2" fontWeight={400}>
              {footerData?.data?.attributes?.email}
            </Typography>
            <Typography variant="body2" fontWeight={400}>
              {footerData?.data?.attributes?.phone}
            </Typography>
          </Box>
        </Grid>

        {footerData?.data?.attributes?.sections?.map((item) => (
          <Grid item lg={3} md={6} xs={12} key={item.id}>
            <FooterItem title={item?.title} data={item} />
          </Grid>
        ))}
      </Grid>
      <Box py={4}>
        <FooterBottomContainer
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" my={3} fontWeight={400}>
            {footerData?.data?.attributes?.copyright}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {footerData?.data?.attributes?.payment?.data?.map((image) => (
              <PaymentImgContainer key={image.id}>
                <img
                  src={image?.attributes?.url}
                  alt={image?.attributes?.url}
                />
              </PaymentImgContainer>
            ))}
          </Stack>
        </FooterBottomContainer>
      </Box>
    </FooterContainer>
  );
}

export default Footer;
