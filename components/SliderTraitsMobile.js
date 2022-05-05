import { Swiper, SwiperSlide } from "swiper/react";
import Trait from "./Trait";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import classes from "../styles/home/Slider.module.css";
import { Pagination } from "swiper";

const SliderMobile = ({ data }) => {
  return (
    <div className={`${classes.overflowMobile} ${classes.sliderMobile}`}>
      <Swiper
        loop={true}
        spaceBetween={16}
        modules={[Pagination]}
        className={classes.swiper}
        slidesPerView={2}
      >
        {data.map((trait) => (
          <SwiperSlide className={`${classes.slideContainer}`} key={trait.id}>
            <Trait
              imageUrl={trait.imageUrl}
              name={trait.name}
              amount={trait.amount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderMobile;
