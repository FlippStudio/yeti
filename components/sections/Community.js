import Box from "@mui/material/Box";
import discord from "../../public/images/community/disc-com.svg";
import twitter from "../../public/images/community/tt-com.svg";
import instagram from "../../public/images/community/insta-com.svg";
import SocialCommunity from "../SocialCommunity";

const socials = [
  {
    id: 1,
    imageUrl: discord,
    name: "DISCORD",
  },
  {
    id: 2,
    imageUrl: twitter,
    name: "TWITTER",
  },
  {
    id: 3,
    imageUrl: instagram,
    name: "INSTAGRAM",
  },
];

const Community = () => {
  return (
    <section className="community">
      <Box className="comm-flex">
        {socials.map((social) => (
          <SocialCommunity
            imageUrl={social.imageUrl}
            name={social.name}
            key={social.id}
          />
        ))}
      </Box>
    </section>
  );
};

export default Community;
