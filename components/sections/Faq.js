import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FaqAccordion from "../FaqAccordion";
import classes from "../../styles/home/Faq.module.css";
import { Button, Grid } from "@mui/material";
import mint from '../../public/images/faq/mint.svg'
import Image from "next/image";

const questions = [
  {
    id: 1,
    title: "Duis egestas rutrum erat vel finibus?",
    content:
      "Maecenas facilisis dolor vitae sodales tincidunt. Maecenas molestie nisl sit amet nulla iaculis finibus. Aenean mollis ut nisi nec venenatis. Ut tristique vehicula venenatis. Nullam vitae dapibus nibh. Proin egestas quis elit a pulvinar. Mauris quis eleifend quam. Aliquam consequat lectus hendrerit mauris gravida aliquet. ",
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
                <Typography
                  component="div"
                  className={classes.mintDesc}
                >
                  Nulla facilisi. Pellentesque facilisis pretium felis nec
                  condimentum. Curabitur scelerisque nec libero in finibus.
                </Typography>
                <Typography
                  component="div"
                  className={classes.mintAddDesc}
                >
                  Nulla facilisi. Pellentesque facilisis pretium felis nec
                  condimentum. Curabitur scelerisque nec libero in finibus.
                </Typography>
                <Button variant="contained" className={classes.mintBtn}>
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
