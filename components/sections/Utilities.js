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
              Meta Yeti NFTs
            </Typography>
            <Box className="flex-center">
              <Typography component="div" className={classes.utiDesc}>
                Genesis yetis are the first form of entry into the game. A
                collection of 6666 yetis in the space, with over 120+ different
                traits from different faces, accessories, backgrounds, hats and
                more!
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
