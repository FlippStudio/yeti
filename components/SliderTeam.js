import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import classes from "../styles/home/Slider.module.css";
import { Pagination } from "swiper";
import { Box } from "@mui/material";
import Image from "next/image";
import classesF from "../styles/home/Faq.module.css";

const SliderTeam = ({ data }) => {
  return (
    <div className={`${classes.overflowMobile} ${classes.sliderMobile}`}>
      <Swiper
        slidesPerView={"auto"}
        loop={true}
        spaceBetween={0}
        modules={[Pagination]}
      >
        {data.map((team) => (
          <SwiperSlide
            className={`${classes.slideContainer} flex-center`}
            key={team.id}
          >
            <Box className={classesF.teamBox}>
              <Box className="flex-center">
                <Image src={team.image} alt={team.name} />
              </Box>

              <Box className={classesF.teamPosition}>{team.position}</Box>
              <Box className={classesF.teamName}>{team.name}</Box>
              {team.desc !== "" && (
                <Box className={classesF.teamDesc}>{team.desc}</Box>
              )}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderTeam;
