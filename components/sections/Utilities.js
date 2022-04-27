import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "../Slider";
import classes from "../../styles/home/Utilities.module.css";

const Utilities = () => {
  return (
    <>
      <div className={`${classes.yeti} d-none`}></div>
      <section className={classes.utilities}>
        <Container maxWidth="xl">
          <Box>
            <Typography
              component="h2"
              className="title-section"
              paddingTop={"100px"}
              position={"relative"}
              zIndex={10}
              id="uti"
            >
              Meta Yeti NFTs
            </Typography>
            <Box className="flex-center">
              <Typography component="div" className={classes.utiDesc}>
                Genesis yetis are the first form of entry into the game Yeti
                Village. A collection of 6666 yetis, with over 200+ different
                traits ranging from different faces, accessories, backgrounds,
                hats and more!
                <br />
                <br />
                Genesis yetis are not only an NFT used in-game, they provide a
                myriad of benefits to holders.
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
