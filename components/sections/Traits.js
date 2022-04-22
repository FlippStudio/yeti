import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import traitOne from "../../public/images/traits/trait-1.svg";
import traitTwo from "../../public/images/traits/trait-2.svg";
import traitThree from "../../public/images/traits/trait-3.svg";
import traitFour from "../../public/images/traits/trait-4.svg";
import traitFive from "../../public/images/traits/trait-5.svg";
import traitSix from "../../public/images/traits/trait-6.svg";
import Trait from "../Trait";
import Image from "next/image";
import classes from "../../styles/home/Traits.module.css";
import SliderMobile from "../SliderTraitsMobile";
import { Button } from "@mui/material";
import yetiMobile from "../../public/images/traits/yetimobile.svg";

const traits = [
  {
    id: 1,
    imageUrl: traitOne,
    name: "Background",
    amount: 21,
  },
  {
    id: 2,
    imageUrl: traitTwo,
    name: "Fur",
    amount: 25,
  },
  {
    id: 3,
    imageUrl: traitThree,
    name: "Clothes",
    amount: 48,
  },
  {
    id: 4,
    imageUrl: traitFour,
    name: "Face",
    amount: 41,
  },
  {
    id: 5,
    imageUrl: traitFive,
    name: "Accessories",
    amount: 27,
  },
  {
    id: 6,
    imageUrl: traitSix,
    name: "Hat",
    amount: 45,
  },
];

const Traits = () => {
  return (
    <>
      <section className={classes.traits} id="yetis">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid
              item
              lg={6}
              md={12}
              order={{ xs: 3 }}
              className={classes.mYeti}
            >
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
                  MetaYeti is not just a profile picture that you can show off,
                  its a ticket to access exclusive utilities and perks, obtain a
                  whitelist for other NFT projects, and will be used in our
                  upcoming game.
                </Typography>
                <Typography component="div" className={classes.yetiDesc}>
                  With YetiDAO, holders will be able to vote for changes,
                  suggest changes, and have influence over the project’s
                  direction. Every voice will be heard, and no idea is a stupid
                  idea.
                </Typography>
                <Button
                  variant="contained"
                  className={`${classes.mintBtn} btn`}
                >
                  GET EARLY ACCESS
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              lg={6}
              xs={12}
              order={{ xs: 4 }}
              className={classes.mImageYeti}
            >
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
              200+ Traits!
            </Typography>
            <Grid container spacing={3} className="d-sm-none">
              {traits.map((trait) => (
                <Grid item xl={2} md={4} sm={6} xs={12} key={trait.id}>
                  <Trait
                    imageUrl={trait.imageUrl}
                    name={trait.name}
                    amount={trait.amount}
                  />
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
