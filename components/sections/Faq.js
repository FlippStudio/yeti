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
      "NFT is a non-fungible token which can be use as a proof of ownership stored on blockchain.",
  },
  {
    id: 2,
    title: "What is MetaYeti?",
    content:
      "MetaYeti is an NFT collection, with interesting utility, stay tuned! 👀",
  },
  {
    id: 3,
    title: "How big is the MetaYeti collection?",
    content:
      "MetaYeti is the NFT collection of 8888 unique characters specially designed for the needs of the project.",
  },
  {
    id: 4,
    title: "Which blockchain is MetaYeti based on?",
    content:
      "MetaYeti is based on Terra (LUNA) blockchain.",
  },
  {
    id: 5,
    title: "How can I buy a MetaYeti?",
    content:
      "You can buy MetaYeti on Luart.io",
  },
  {
    id: 6,
    title: "What about DAO funds?",
    content:
      "The collected treasury mostly will be used for investing in p2e game and community development.",
  },
];

const Faq = () => {
  return (
    <section className={classes.faq}>
      <Container maxWidth="xl">
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
