import complete from "../public/images/roadmap/complete.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/dist/client/image";
import classes from "../styles/home/Step.module.css";

const StepComplete = ({ percent, name, description }) => {
  return (
    <Grid item md={3} sm={6} xs={12}>
      <Typography component="div" className={classes.stepPercent}>
        {percent}%
      </Typography>
      <Box className="flex-center" marginBottom={3}>
        <Image src={complete} alt="Status of work" />
        <hr className={classes.horizontalLine} />
      </Box>
      <Typography component="div" className={classes.stepTitle}>
        {name}
      </Typography>
      <Typography component="div" className={classes.stepDesc}>
        {description}
      </Typography>
    </Grid>
  );
};

export default StepComplete;
