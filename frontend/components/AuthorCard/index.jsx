import { Stack } from "@mui/system";
import React from "react";
import CardTitle from "../shared/ui/CardTitle";
import { ImgContainerStyle } from "./Styles";

const AuthorCard = () => {
  return (
    <Stack direction={"column"} alignItems={"center"}>
      <ImgContainerStyle>
        <img src="/images/author-1.jpg" alt="" />
      </ImgContainerStyle>
      <CardTitle title={"Brandon T. Trigg"} variant={"h3"} />
    </Stack>
  );
};

export default AuthorCard;
