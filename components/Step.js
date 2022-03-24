import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import incomplete from "../public/images/roadmap/incomplete.svg";
import Image from "next/dist/client/image";
import classes from "../styles/home/Step.module.css";

const Step = ({ percent, name, description }) => {
  return (
    <Grid item md={3} sm={6} xs={12}>
      <Typography
        component="div"
        className={`${classes.stepPercent} ${classes.incomplete}`}
      >
        {percent}%
      </Typography>
      <Box className="flex-center" marginBottom={3}>
        <Image src={incomplete} alt="Status of work" />
        <hr className={`${classes.horizontalLine} ${classes.dotted}`} />
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
export default Step;
