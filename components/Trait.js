import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/dist/client/image";
import classes from "../styles/home/Trait.module.css";

const Trait = ({ imageUrl, name, amount }) => {
  return (
    <Box>
      <Box className="flex-center">
        <Image src={imageUrl} alt="Trait" />
      </Box>

      <Box className="flex-center" marginTop={1}>
        <Typography
          component="span"
          className={`${classes.normalTrait} ${classes.blue}`}
        >
          {name}:
        </Typography>
        <Typography component="span" className={classes.amount} marginLeft={2}>
          {amount}
        </Typography>
        <Typography
          component="span"
          className={classes.normalTrait}
          marginLeft={2}
        >
          items
        </Typography>
      </Box>
    </Box>
  );
};

export default Trait;
