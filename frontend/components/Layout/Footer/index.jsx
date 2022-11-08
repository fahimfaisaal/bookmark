import { Box, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import Logo from '../../Logo';
import { LogoContainer } from '../NavBar/Styles';
import FooterItem from './FooterItem';
import {
  FooterBottomContainer,
  FooterContainer,
  PaymentImgContainer
} from './Styles';

const getFooter = () => ({
  data: {
    id: 1,
    attributes: {
      address: '2429 River Drive, Suite 35 Cottonhall, CA 2296 United Kingdom',
      email: 'dummy@dummy.com',
      phone: '+1 256-698-0694',
      copyright: '© Copyright 2022 RedQ, Inc. All rights reserved',
      createdAt: '2022-11-07T12:16:04.593Z',
      updatedAt: '2022-11-07T12:20:26.536Z',
      publishedAt: '2022-11-07T12:20:26.535Z',
      lists: [
        {
          title: 'Explore',
          listItem: [
            {
              link: '/about',
              name: 'About Us'
            },
            {
              link: '/books',
              name: 'Books'
            },
            {
              link: '/authors',
              name: 'Authors'
            },
            {
              link: '/publishers',
              name: 'Publishers'
            }
          ]
        },
        {
          title: 'Customer Service',
          listItem: [
            {
              link: '/contact',
              name: 'Contact Us'
            },
            {
              link: '/',
              name: 'FAQ & Helps'
            },
            {
              link: '/',
              name: 'Returns'
            },
            {
              link: '/',
              name: 'Store Pickup'
            }
          ]
        },
        {
          title: 'Our information',
          listItem: [
            {
              link: '/',
              name: 'Privacy policy update'
            },
            {
              link: '/',
              name: 'Terms & conditions'
            },
            {
              link: '/',
              name: 'Return Policy'
            },
            {
              link: '/',
              name: 'Sitemap'
            }
          ]
        }
      ],
      payment: {
        data: [
          {
            id: 224,
            attributes: {
              name: 'visa.png',
              alternativeText: 'visa.png',
              caption: 'visa.png',
              width: 240,
              height: 79,
              formats: null,
              hash: 'visa_3a491ed4e6',
              ext: '.png',
              mime: 'image/png',
              size: 3.55,
              url: '/uploads/visa_3a491ed4e6.png',
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2022-11-07T12:17:22.130Z',
              updatedAt: '2022-11-07T12:17:22.130Z'
            }
          },
          {
            id: 223,
            attributes: {
              name: 'paypal.png',
              alternativeText: 'paypal.png',
              caption: 'paypal.png',
              width: 283,
              height: 72,
              formats: {
                thumbnail: {
                  ext: '.png',
                  url: '/uploads/thumbnail_paypal_de18ca3ed6.png',
                  hash: 'thumbnail_paypal_de18ca3ed6',
                  mime: 'image/png',
                  name: 'thumbnail_paypal.png',
                  path: null,
                  size: 15,
                  width: 245,
                  height: 62
                }
              },
              hash: 'paypal_de18ca3ed6',
              ext: '.png',
              mime: 'image/png',
              size: 3.75,
              url: '/uploads/paypal_de18ca3ed6.png',
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2022-11-07T12:17:17.484Z',
              updatedAt: '2022-11-07T12:17:17.484Z'
            }
          },
          {
            id: 222,
            attributes: {
              name: 'discover.png',
              alternativeText: 'discover.png',
              caption: 'discover.png',
              width: 271,
              height: 69,
              formats: {
                thumbnail: {
                  ext: '.png',
                  url: '/uploads/thumbnail_discover_8a646e6cf6.png',
                  hash: 'thumbnail_discover_8a646e6cf6',
                  mime: 'image/png',
                  name: 'thumbnail_discover.png',
                  path: null,
                  size: 12.93,
                  width: 245,
                  height: 62
                }
              },
              hash: 'discover_8a646e6cf6',
              ext: '.png',
              mime: 'image/png',
              size: 7.76,
              url: '/uploads/discover_8a646e6cf6.png',
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2022-11-07T12:17:11.634Z',
              updatedAt: '2022-11-07T12:17:11.634Z'
            }
          },
          {
            id: 221,
            attributes: {
              name: 'master.png',
              alternativeText: 'master.png',
              caption: 'master.png',
              width: 111,
              height: 67,
              formats: null,
              hash: 'master_7c305a3bd2',
              ext: '.png',
              mime: 'image/png',
              size: 3.91,
              url: '/uploads/master_7c305a3bd2.png',
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2022-11-07T12:06:03.129Z',
              updatedAt: '2022-11-07T12:06:03.129Z'
            }
          }
        ]
      }
    }
  },
  meta: {}
});

function Footer() {
  const { data: footerData } = getFooter();

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
            {footerData.attributes.address}
          </Typography>
          <Box py={3}>
            <Typography variant="body2" fontWeight={400}>
              {footerData.attributes.email}
            </Typography>
            <Typography variant="body2" fontWeight={400}>
              {footerData.attributes.phone}
            </Typography>
          </Box>
        </Grid>

        {footerData.attributes?.lists.map((item) => (
          <Grid item lg={3} md={6} xs={12} key={item.id}>
            <FooterItem title={item.title} data={item?.listItem} />
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
            {footerData.attributes.copyright}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {footerData?.attributes?.payment?.data?.map((image) => (
              <PaymentImgContainer key={image.id}>
                <img src={image?.attributes?.url} alt="" />
              </PaymentImgContainer>
            ))}
            {/* <PaymentImgContainer>
              <img src="/images/payments/discover.png" alt="" />
            </PaymentImgContainer>
            <PaymentImgContainer>
              <img src="/images/payments/master.png" alt="" />
            </PaymentImgContainer>

            <PaymentImgContainer>
              <img src="/images/payments/paypal.png" alt="" />
            </PaymentImgContainer>
            <PaymentImgContainer>
              <img src="/images/payments/visa.png" alt="" />
            </PaymentImgContainer> */}
          </Stack>
        </FooterBottomContainer>
      </Box>
    </FooterContainer>
  );
}

export default Footer;
