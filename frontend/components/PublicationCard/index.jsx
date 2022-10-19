import { Box, Stack } from "@mui/system";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import CardTitle from "../shared/ui/CardTitle";
import { ContainerStyle, LinkContainer, LogoContainer } from "./Styles";

const PublicationCard = ({ img, title, slug }) => {
  return (
    <ContainerStyle>
      <LogoContainer>
        <img src="/images/publisher-logo.png" alt="" />
      </LogoContainer>
      <Box>
        <CardTitle title={"Too cool publication"} variant={"h2"} />
        <Stack direction={"row"} spacing={1}>
          <LinkContainer>
            <BsFacebook />
          </LinkContainer>
          <LinkContainer>
            <BsYoutube />
          </LinkContainer>
          <LinkContainer>
            <BsInstagram />
          </LinkContainer>
        </Stack>
      </Box>
    </ContainerStyle>
  );
};

export default PublicationCard;
