import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import yeti from "../../public/images/yeti-help.svg";
import help from "../../public/images/traits/help.svg";
import iglo from "../../public/images/traits/iglo.svg";
import meeting from "../../public/images/traits/meeting.svg";
import traitOne from "../../public/images/traits/trait-1.svg";
import traitTwo from "../../public/images/traits/trait-2.svg";
import traitThree from "../../public/images/traits/trait-3.svg";
import traitFour from "../../public/images/traits/trait-4.svg";
import traitFive from "../../public/images/traits/trait-5.svg";
import traitSix from "../../public/images/traits/trait-6.svg";
import Trait from "../Trait";
import YetiHelp from "../YetiHelp";
import Image from "next/image";
import classes from "../../styles/home/Traits.module.css";
import SliderMobile from "../SliderTraitsMobile";
import { Button } from "@mui/material";
import yetiMobile from '../../public/images/traits/yetiMobile.svg'

const traits = [traitOne, traitTwo, traitThree, traitFour, traitFive, traitSix];
const yetis = [
  {
    id: 1,
    image: help,
    text: "We help animals in need all over the world! 10% of sales go to animal shelters!",
  },
  {
    id: 2,
    image: iglo,
    text: "Each animal that has received help from us is warmly welcomed in our igloo",
  },
  {
    id: 3,
    image: meeting,
    text: "We organize meetings 3 times a year for all YETI owners!",
  },
];

const Traits = () => {
  return (
    <>
      <section className={classes.traits}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item lg={6} xs={12} order={{ lg: 1, xs: 2 }}>
              <Box className="flex-center">
                <Image src={yeti} alt="Yeti Kotleti" />
              </Box>
            </Grid>
            <Grid item lg={6} md={12} order={{ lg: 2, xs: 1 }}>
              <Box>
                <Typography compontent="h3" className={classes.yetiSubtitle}>
                  Yeti loves animals
                </Typography>
                <Typography component="h2" className={classes.yetiTitle}>
                  Yeti help animals!
                </Typography>
                <Grid container spacing={2}>
                  {yetis.map((yeti) => (
                    <YetiHelp
                      key={yeti.id}
                      imageUrl={yeti.image}
                      text={yeti.text}
                    />
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item lg={6} md={12} order={{ xs: 3 }} className={classes.mYeti}>
              <Box>
                <Typography compontent="h3" className={classes.yetiSubtitle}>
                  Gamers Yeti
                </Typography>
                <Typography component="h2" className={classes.yetiTitle}>
                  Play like yeti
                </Typography>
                <Typography
                  component="div"
                  className={`${classes.yetiDesc} ${classes.bold}`}
                >
                  Nulla facilisi. Pellentesque facilisis pretium felis nec
                  condimentum. Curabitur scelerisque nec libero in finibus.
                </Typography>
                <Typography
                  component="div"
                  className={classes.yetiDesc}
                >
                  Suspendisse mollis nibh leo, sit amet dapibus dolor facilisis
                  non. Aenean convallis dolor ac gravida malesuada. Proin non
                  scelerisque tortor, finibus scelerisque odio.
                </Typography>
                <Button variant="contained" className={classes.mintBtn}>
                  GET EARLY ACCESS
                </Button>
              </Box>
            </Grid>
            <Grid item lg={6} xs={12} order={{ xs: 4 }} className={classes.mImageYeti}>
              <Box className="flex-center">
                <Image src={yetiMobile} alt="Yeti Kotleti" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.ourTraits}>
        <Container maxWidth="xl">
          <Box>
            <Typography
              component="h2"
              className={`${classes.ourTitle} title-section`}
            >
              Our traits
            </Typography>
            <Grid container spacing={3} className="d-sm-none">
              {traits.map((url, index) => (
                <Grid item xl={2} md={4} sm={6} xs={12} key={index}>
                  <Trait imageUrl={url} />
                </Grid>
              ))}
            </Grid>
            <SliderMobile data={traits} />
          </Box>
        </Container>
      </section>
    </>
  );
};

export default Traits;
