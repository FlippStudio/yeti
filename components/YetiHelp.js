import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/dist/client/image";
import classes from "../styles/home/YetiHelp.module.css";

const YetiHelp = ({ imageUrl, text }) => {
  return (
    <>
      <Grid item lg={3} md={4} sm={4} xs={12} className={classes.marginBottom}>
        <Box className={`${classes.yetiFlexEnd} flex-center`}>
          <Image src={imageUrl} alt="Yeti's helping" />
        </Box>
      </Grid>
      <Grid item lg={9} md={8} sm={8} xs={12} className={classes.marginBottom}>
        <div className={classes.yetiHelp}>{text}</div>
      </Grid>
    </>
  );
};

export default YetiHelp;
