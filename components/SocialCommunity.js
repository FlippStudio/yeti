import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/dist/client/image";

const SocialCommunity = ({ imageUrl, name }) => {
  return (
    <a href="#" className="flex-center comm">
      <Box className="flex-center comm-stat">
        <Image src={imageUrl} alt="Community" className="comm-social" />
        <Typography component="span" className="comm-item d-sm-none">
          {name}
        </Typography>
      </Box>
    </a>
  );
};

export default SocialCommunity;
