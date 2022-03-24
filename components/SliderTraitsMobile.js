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
      <Swiper slidesPerView={1} spaceBetween={0} modules={[Pagination]}>
        {data.map((url, index) => (
          <SwiperSlide className={classes.slideContainer} key={index}>
            <Trait imageUrl={url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderMobile;
