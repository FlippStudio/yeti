import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FaqAccordion from "../FaqAccordion";
import classes from "../../styles/home/Faq.module.css";
import { Grid } from "@mui/material";
import Image from "next/image";
import t1 from "../../public/images/team/t1.svg";
import t2 from "../../public/images/team/t2.svg";
import t3 from "../../public/images/team/t3.svg";
import t4 from "../../public/images/team/t4.svg";
import t5 from "../../public/images/team/t5.svg";
import t6 from "../../public/images/team/t6.svg";
import t7 from "../../public/images/team/t7.svg";
import t8 from "../../public/images/team/t8.svg";
import SliderTeam from "../SliderTeam";

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

const teams = [
  {
    id: 1,
    image: t1,
    position: "Head of Game",
    name: "Danzy",
    desc: "",
  },
  {
    id: 2,
    image: t2,
    position: "PM",
    name: "Adam",
    desc: "",
  },
  {
    id: 3,
    image: t3,
    position: "Head of Relations",
    name: "Hash",
    desc: "",
  },
  {
    id: 4,
    image: t4,
    position: "Lead Game Developer",
    name: "Patrick",
    desc: "",
  },
  {
    id: 5,
    image: t5,
    position: "Head of Finance",
    name: "Bella",
    desc: "",
  },
  {
    id: 6,
    image: t6,
    position: "CM",
    name: "Kevin",
    desc: "",
  },
  {
    id: 7,
    image: t7,
    position: "Marketing Advisor",
    name: "Cat",
    desc: "",
  },
  {
    id: 8,
    image: t8,
    position: "Marketing Manager",
    name: "Aurelius",
    desc: "",
  },
];

const Faq = () => {
  return (
    <section className={classes.faq} id="story">
      <Container maxWidth="xl">
        <Box>
          <Grid container spacing={1} className={classes.mintSec}>
            <Grid item xs={12} marginBottom={5}>
              <Box>
                <Typography component="span" className="title-section">
                  Yeti
                </Typography>
                <Typography
                  component="span"
                  className="title-section"
                  marginLeft={2}
                  color={"#00A6F1"}
                >
                  Team
                </Typography>
              </Box>
            </Grid>
            {teams.map((team) => (
              <Grid
                item
                md={3}
                sm={4}
                key={team.id}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <Box className={classes.teamBox}>
                  <Box className="flex-center">
                    <Image src={team.image} alt={team.name} />
                  </Box>

                  <Box className={classes.teamPosition}>{team.position}</Box>
                  <Box className={classes.teamName}>{team.name}</Box>
                  {team.desc !== "" && (
                    <Box className={classes.teamDesc}>{team.desc}</Box>
                  )}
                </Box>
              </Grid>
            ))}
            <Grid item xs={12} sx={{ display: { xs: "block", sm: "none" } }}>
              <SliderTeam data={teams} />
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
