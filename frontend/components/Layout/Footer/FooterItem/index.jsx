import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { LinkContainer } from "./Styles";

const FooterItem = ({ title, data }) => {
  return (
    <Box>
      <Typography variant="h2" paddingBottom={4}>
        {title}
      </Typography>
      <Stack>
        {data.map((item) => (
          <LinkContainer href={item.Link} key={item.text}>
            {item.text}
          </LinkContainer>
        ))}
      </Stack>
    </Box>
  );
};

export default FooterItem;
