import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Socials from "../Socials";

const Footer = () => {
  return (
    <section className="footer">
      <Container maxWidth="xl" sx={{ maxWidth: { xl: "xl", lg: "lg", md: 'md', sm: 'sm', xs: 'xs' }, height: "100%" }}>
        <Box className="flex-space fFlex">
          <Typography component="div">© 2022 YETI KOTLETI</Typography>
          <Socials c={"d-sm-none"} />
        </Box>
      </Container>
    </section>
  );
};

export default Footer;
