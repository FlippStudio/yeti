import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FaqAccordion from "../FaqAccordion";
import classes from "../../styles/home/Faq.module.css";
import { Button, Grid } from "@mui/material";
import mint from "../../public/images/faq/mint.svg";
import Image from "next/image";

const questions = [
  {
    id: 1,
    title: "Game? What game?",
    content:
      ".. expect a play to earn game with amazing token utility that is both attractive, fun and easy to play. We plan to make a game that is open to all non-crypto and crypto players alike.",
  },
  {
    id: 2,
    title: "Duis egestas rutrum erat vel finibus?",
    content:
      "Maecenas facilisis dolor vitae sodales tincidunt. Maecenas molestie nisl sit amet nulla iaculis finibus. Aenean mollis ut nisi nec venenatis. Ut tristique vehicula venenatis. Nullam vitae dapibus nibh. Proin egestas quis elit a pulvinar. Mauris quis eleifend quam. Aliquam consequat lectus hendrerit mauris gravida aliquet. ",
  },
  {
    id: 3,
    title: "Duis egestas rutrum erat vel finibus?",
    content:
      "Maecenas facilisis dolor vitae sodales tincidunt. Maecenas molestie nisl sit amet nulla iaculis finibus. Aenean mollis ut nisi nec venenatis. Ut tristique vehicula venenatis. Nullam vitae dapibus nibh. Proin egestas quis elit a pulvinar. Mauris quis eleifend quam. Aliquam consequat lectus hendrerit mauris gravida aliquet. ",
  },
  {
    id: 4,
    title: "Duis egestas rutrum erat vel finibus?",
    content:
      "Maecenas facilisis dolor vitae sodales tincidunt. Maecenas molestie nisl sit amet nulla iaculis finibus. Aenean mollis ut nisi nec venenatis. Ut tristique vehicula venenatis. Nullam vitae dapibus nibh. Proin egestas quis elit a pulvinar. Mauris quis eleifend quam. Aliquam consequat lectus hendrerit mauris gravida aliquet. ",
  },
];

const Faq = () => {
  return (
    <section className={classes.faq}>
      <Container maxWidth="lg">
        <Box>
          <Grid container spacing={3} className={classes.mintSec}>
            <Grid item md={6} xs={12}>
              <Box>
                <Typography component="span" className="title-section">
                  MINT
                </Typography>
                <Typography
                  component="span"
                  className="title-section"
                  marginLeft={2}
                  color={"#00A6F1"}
                >
                  YETI
                </Typography>
                <Typography component="div" className={classes.mintDesc}>
                  Most of the proceeds from the mint will be used to fund the
                  production of the MetaYeti&apos;s game. We are aiming to be the
                  premier gamefi in Terra.
                </Typography>
                <Typography component="div" className={classes.mintAddDesc}>
                  The team and partners behind MetaYeti are hard working and
                  talented, we will strive to give as much benefits to the
                  holders. Own the yeti, be part of the yeti-verse.
                </Typography>
                <Button variant="contained" className={`${classes.mintBtn} btn`}>
                  MINT
                </Button>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box className="flex-center">
                <Image src={mint} alt="Yeti Kotleti" />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography
            component="h2"
            className="title-section"
            marginBottom={"104px"}
          >
            Faq
          </Typography>
          {questions.map((question) => (
            <FaqAccordion
              key={question.id}
              title={question.title}
              content={question.content}
            />
          ))}
        </Box>
      </Container>
      <div className={classes.checkBack}></div>
    </section>
  );
};

export default Faq;
