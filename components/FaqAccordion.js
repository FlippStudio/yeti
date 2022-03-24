import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import classes from "../styles/home/Faq.module.css";

const FaqAccordion = ({ title, content }) => {
  return (
    <div>
      <Accordion className={classes.acc}>
        <AccordionSummary expandIcon={<ArrowDownwardIcon fontSize="large" />}>
          <Typography className={`acc-title ${classes.title}`}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
