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
    title: "What is NFT?",
    content:
      "NFT is a non-fungible token which can be used as a proof of ownership stored on blockchain.",
  },
  {
    id: 2,
    title: "What is MetaYeti?",
    content:
      "MetaYeti's NFT collection will act as the genesis collection to a future play to earn title on the Terra network.",
  },
  {
    id: 3,
    title: "How big is the MetaYeti collection?",
    content:
      "MetaYeti is the NFT collection of 5555 unique characters specially designed for the needs of the project.",
  },
  {
    id: 4,
    title: "Which blockchain is MetaYeti based on?",
    content: "MetaYeti lives on the Terra (LUNA) blockchain.",
  },
  {
    id: 5,
    title: "How can I buy a MetaYeti?",
    content:
      "MetaYeti will be available for purchase at Luart.io and a secret undisclosed site.",
  },
  {
    id: 6,
    title: "What about DAO funds?",
    content:
      "The collected treasury will mostly be used for the development of the play-to-earn game and the community.",
  },
];

const Faq = () => {
  return (
    <section className={classes.faq} id="story">
      <Container maxWidth="xl">
        <Box>
          <Grid container spacing={3} className={classes.mintSec}>
            <Grid item xs={12}>
              <Box sx={{ textAlign: "center" }}>
                <Typography component="span" className="title-section">
                  The
                </Typography>
                <Typography
                  component="span"
                  className="title-section"
                  marginLeft={2}
                  color={"#00A6F1"}
                >
                  Team
                </Typography>
                <Box className="flex-center">
                  <Typography
                    component="div"
                    className={classes.teamDesc}
                    maxWidth={"800px"}
                  >
                    The team and partners behind MetaYeti are hardworking and
                    talented, coming from various backgrounds and the developers
                    behind the game has years of experience making all kinds of
                    games for any platform. Own the yeti, be part of the
                    yeti-verse.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box id="faq">
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
