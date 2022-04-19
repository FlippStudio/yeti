import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "../Slider";
import classes from "../../styles/home/Utilities.module.css";

const Utilities = () => {
  return (
    <>
      <div className={`${classes.yeti} d-none`}></div>
      <section className={classes.utilities} id="uti">
        <Container maxWidth="xl">
          <Box>
            <Typography
              component="h2"
              className="title-section"
              marginTop={"100px"}
              position={"relative"}
              zIndex={10}
            >
              Yeti Utilities
            </Typography>
            <Box className="flex-center">
              <Typography component="div" className={classes.utiDesc}>
                MetaYeti is not just a profile picture that you can show off,
                it&apos;s a ticket to access exclusive utilities and perks,
                obtain a whitelist for other NFT projects, and it will be used
                as genesis characters in our upcoming game.
                <br />
                <br />
                Most of the proceeds from the mint will be used to fund the
                production of the MetaYeti&apos;s game.
              </Typography>
            </Box>
          </Box>
        </Container>
      </section>

      <Slider />
    </>
  );
};

export default Utilities;
