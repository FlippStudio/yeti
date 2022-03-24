import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/dist/client/image";

const SocialCommunity = ({ imageUrl, name }) => {
  return (
    <a href="#">
      <Box className="flex-center comm-stat">
        <Image src={imageUrl} alt="Community" />
        <Typography
          component="span"
          fontSize={24}
          fontWeight={"900"}
          lineHeight={"24px"}
          marginLeft={"16px"}
        >
          {name}
        </Typography>
      </Box>
    </a>
  );
};

export default SocialCommunity;
