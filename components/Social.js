import Image from "next/image";
import classes from "../styles/home/Social.module.css";

const Social = ({ url, imageUrl }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${classes.social} flex-center`}
    >
      <Image src={imageUrl} alt="Socials" />
    </a>
  );
};

export default Social;
