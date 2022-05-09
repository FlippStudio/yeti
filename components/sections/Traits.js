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
import yetiMobile from "../../public/images/traits/yetibattle.png";
import yetiM from "../../public/images/traits/yetim.svg";

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
    amount: 46,
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
    amount: 44,
  },
];

const Traits = () => {
  return (
    <>
      <section className={classes.traits} id="yetis">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item md={6} xs={12} className={classes.mYeti}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: { xl: "center", lg: "flex-start" },
                }}
              >
                <Box>
                  <Typography compontent="h3" className={classes.yetiSubtitle}>
                    Gamers Yeti
                  </Typography>
                  <Typography component="h2" className={classes.yetiTitle}>
                    Play to Earn
                  </Typography>
                  <Typography component="div" className={classes.yetiDesc}>
                    Play the game, earn Yeti tokens! Battle for keeps! Stake to
                    earn! A deflationary economy and tight controls will be
                    engaged to manage the ecosystem of Yeti Village. All this
                    while ensuring semi-passive gameplay for the busy. Return
                    daily and watch your yetis and treasury grow!
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box className="flex-center">
                <Image src={yetiM} alt="Play 2 earn" />
              </Box>
            </Grid>
            <Grid item xs={12} className={classes.mYeti}>
              <Box>
                <Box textAlign={"center"}>
                  <Typography compontent="h3" className={classes.yetiSubtitle}>
                    Game details coming soon!
                  </Typography>
                  <Typography component="h2" className={classes.yetiTitle}>
                    Play like Yeti
                  </Typography>
                  <Typography component="div" className={classes.yetiDesc}>
                    As Yeti Village prosper, poachers and bandits will be out to
                    steal and pillage! Defend Yeti Village with Yetis. With
                    unique fighting mechanics that require some strategy and
                    plan your yeti team well!
                  </Typography>
                  <Button
                    variant="contained"
                    className={`${classes.mintBtn} btn`}
                  >
                    GET EARLY ACCESS
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={`flex-center ${classes.mImageYeti}`}>
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
          </Box>
        </Container>
      </section>
      <SliderMobile data={traits} />
    </>
  );
};

export default Traits;
