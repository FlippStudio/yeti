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
                MetaYeti are a collection of 8888 NFTs that are made up of many
                different traits ranging from different helmets, backgrounds,
                faces.
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
