import Social from "./Social";
import discord from "../public/images/socials/discord.svg";
import twitter from "../public/images/socials/tt.svg";
import instagram from "../public/images/socials/instagram.svg";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

const Socials = ({ c }) => {
  return (
    <Box sx={{ flexGrow: 0 }} className={c}>
      <Stack direction="row" spacing={1}>
        <IconButton aria-label="Discord">
          <Social
            url="https://discord.com/invite/7mSJSY8C"
            imageUrl={discord}
          />
        </IconButton>
        <IconButton aria-label="Twitter">
          <Social url="#" imageUrl={twitter} />
        </IconButton>
        <IconButton aria-label="Instagram">
          <Social url="#" imageUrl={instagram} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Socials;
