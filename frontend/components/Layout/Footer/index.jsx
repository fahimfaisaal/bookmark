import { Box, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { LogoContainer } from "../NavBar/Styles";
import FooterItem from "./FooterItem";
import {
  FooterBottomContainer,
  FooterContainer,
  PaymentImgContainer,
} from "./Styles";

const exploreData = [
  { link: "/about", text: "About Us" },
  { link: "/books", text: "Books" },
  { link: "/authors", text: "Authors" },
  { link: "/publishers", text: "Publishers" },
];
const customerServiceData = [
  { link: "/contact", text: "Contact Us" },
  { link: "", text: "FAQ & Helps" },
  { link: "", text: "Returns" },
  { link: "/books", text: "Store Pickup" },
];
const ourInfoData = [
  { link: "", text: "Privacy policy update" },
  { link: "", text: "Terms & conditions" },
  { link: "", text: "Return Policy" },
  { link: "", text: "Sitemap" },
];

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container spacing={5}>
        <Grid item lg={3} md={6} xs={12}>
          <LogoContainer>
            <img src="/images/logo-1.png" alt="" />
          </LogoContainer>
          <Typography variant="body2" py={3}>
            2429 River Drive, Suite 35 Cottonhall, CA 2296 United Kingdom
          </Typography>
          <Typography variant="body2" py={3}>
            dummy@dummy.com
            <Typography variant="body2">+1 256-698-0694</Typography>
          </Typography>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <FooterItem title={"Explore"} data={exploreData} />
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <FooterItem title={"Customer Service"} data={customerServiceData} />
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <FooterItem title={"Our information"} data={ourInfoData} />
        </Grid>
      </Grid>
      <Box py={4}>
        <FooterBottomContainer
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="body2" my={3}>
            © Copyright 2022 RedQ, Inc. All rights reserved
          </Typography>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <PaymentImgContainer>
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
            </PaymentImgContainer>
          </Stack>
        </FooterBottomContainer>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
