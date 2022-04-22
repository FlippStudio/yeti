import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import StepComplete from "../StepComplete";
import Step from "../Step";
import classes from "../../styles/home/Roadmap.module.css";

const steps = [
  {
    id: 1,
    percent: 10,
    name: "Phase 0",
    description: [
      "Building community",
      "Giveaways and games",
      "WL Collaborations",
      "Social Marketing",
      "Release lite-paper",
      "Commence game development of Terra’s first semi-idle play to earn game with defi-mechanics",
      "Mint!",
    ],
    status: 0,
  },
  {
    id: 2,
    percent: 25,
    name: "Phase 1",
    description: [
      "Major collaborations",
      "Release Whitepaper",
      "Staking/ locking Yeti’s for $YETI tokens",
      "Yeti Breeding",
      "Weekly game development sneak peaks",
      "First DAO voting",
    ],
    status: 0,
  },
  {
    id: 3,
    percent: 50,
    name: "Phase 2",
    description: [
      "Unlock activities feature",
      "Game alpha testing and release",
    ],
    status: 0,
  },
  {
    id: 4,
    percent: 75,
    name: "Phase 3",
    description: ["Battle feature", "Game beta release"],
    status: 0,
  },
];

const Roadmap = () => {
  return (
    <section className={classes.roadmap} id="roadmap">
      <Container maxWidth="xl">
        <Box>
          <Typography
            component="h2"
            className="title-section"
            marginBottom={"104px"}
          >
            Road map
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {steps.map((step) =>
            step.status ? (
              <StepComplete
                key={step.id}
                percent={step.percent}
                name={step.name}
                description={step.description}
              />
            ) : (
              <Step
                key={step.id}
                percent={step.percent}
                name={step.name}
                description={step.description}
              />
            )
          )}
        </Grid>
      </Container>
    </section>
  );
};

export default Roadmap;
