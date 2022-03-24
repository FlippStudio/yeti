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
        </Grid>
        <Box>
          <Typography
            component="h2"
            className={`${classes.ourTitle} title-section`}
          >
            Our traits
          </Typography>
          <Grid container spacing={3} className='d-sm-none'>
            {traits.map((url, index) => (
              <Grid item lg={2} md={4} sm={6} xs={12} key={index}>
                <Trait imageUrl={url} />
              </Grid>
            ))}
          </Grid>
          <SliderMobile data={traits} /> 
        </Box>
      </Container>
    </section>
  );
};

export default Traits;
