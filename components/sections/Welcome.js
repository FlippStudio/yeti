import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import discord from "../../public/images/socials/discord-welcome.svg";
import arrow from "../../public/images/arrow.svg";
import Image from "next/image";
import classes from "../../styles/home/Welcome.module.css";

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
              YETI KOTLETI
            </Typography>
            <Typography component="h2" className={classes.subtitle}>
              Lorem ipsum
            </Typography>
            <Typography component="div" className={classes.welcomeDesc}>
              Duis egestas rutrum erat vel finibus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec dapibus purus eget nisl
              efficitur, at porttitor ex accumsan.
            </Typography>
            <Grid container spacing={2}>
              <Grid
                item
                md={3}
                sm={5}
                xs={6}
                className={`flex-start ${classes.fCenter}`}
              >
                <Button variant="contained" className={classes.btn}>
                  Explore now!
                </Button>
              </Grid>
              <Grid
                item
                sm={6}
                xs={6}
                className={`flex-start ${classes.fCenter}`}
              >
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Image src={discord} alt="Discord Yeti" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Typography component="h6" className={classes.link}>
                    JOIN DISCORD
                  </Typography>
                </a>
              </Grid>
            </Grid>
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
