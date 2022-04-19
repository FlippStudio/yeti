import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import discord from "../../public/images/socials/discord-welcome.svg";
import arrow from "../../public/images/arrow.svg";
import Image from "next/image";
import classes from "../../styles/home/Welcome.module.css";
import { Stack } from "@mui/material";

const scrollTo = (e) => {
  let utilities = document.getElementById("uti");
  e.preventDefault(); // Stop Page Reloading
  utilities && utilities.scrollIntoView({ behavior: "smooth" });
};

const Welcome = () => {
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Box sx={{ flexGrow: 1, position: "relative", zIndex: 10 }}>
        <Grid container spacing={2}>
          <Grid item lg={6} sm={10} xs={12}>
            <Typography component="h1" className={classes.title}>
              META YETI
            </Typography>
            <Typography component="h2" className={classes.subtitle}>
              Icey friends leaps into the Terra-verse!
            </Typography>
            <Typography component="div" className={classes.welcomeDesc}>
              MetaYeti is a collection of 5555 NFTs that is made up of over 130
              different traits ranging from different headwear, backgrounds,
              faces, accessories, clothes and fur. With a chance to mint our
              exclusive 1:1s as well!
            </Typography>
            <Stack>
              <Box className={`flex-start ${classes.fCenter}`}>
                <Button variant="contained" className="btn mr-4">
                  Explore now!
                </Button>
                <a
                  href="https://discord.com/invite/SCGAWsMKTC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comm flex-center"
                >
                  <Image
                    src={discord}
                    alt="Discord Yeti"
                    className="comm-social"
                  />
                  <Typography component="span" className={classes.link}>
                    JOIN DISCORD
                  </Typography>
                </a>
              </Box>
            </Stack>
            <Grid container spacing={2} className={classes.statsContainer}>
              <Grid item md={3} sm={4} xs={12} className={classes.fCenter}>
                <Typography component="p" className={classes.stats}>
                  30K+
                </Typography>
                <Typography component="p" className={classes.statsDesc}>
                  Artowork
                </Typography>
              </Grid>
              <Grid item md={3} sm={4} xs={12} className={classes.fCenter}>
                <Typography component="p" className={classes.stats}>
                  130K+
                </Typography>
                <Typography component="p" className={classes.statsDesc}>
                  Auction
                </Typography>
              </Grid>
              <Grid item md={3} sm={4} xs={12} className={classes.fCenter}>
                <Typography component="p" className={classes.stats}>
                  10K
                </Typography>
                <Typography component="p" className={classes.statsDesc}>
                  Owners
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={6}
            sm={2}
            zIndex={10}
            position={"relative"}
            className="d-sm-none"
          >
            <div className={classes.arrowSpace}>
              <Button
                variant="contained"
                className={classes.nextSection}
                onClick={scrollTo}
              >
                <Image src={arrow} alt="Scroll to next section" height={30} />
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Welcome;
