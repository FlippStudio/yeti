import { Swiper, SwiperSlide } from "swiper/react";
import yetiOne from "../public/images/yetis/yeti-1.svg";
import yetiTwo from "../public/images/yetis/yeti-2.svg";
import yetiFour from "../public/images/yetis/yeti-4.svg";
import yetiFive from "../public/images/yetis/yeti-5.svg";
import Yeti from "./Yeti";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import classes from "../styles/home/Slider.module.css";

// import required modules
import { Pagination } from "swiper";

const yetis = [
  {
    id: 1,
    name: "YETI NAME #12345",
    imageUrl: yetiOne,
  },
  {
    id: 2,
    name: "YETI NAME #12345",
    imageUrl: yetiTwo,
  },
  {
    id: 3,
    name: "YETI NAME #12345",
    imageUrl: yetiFour,
  },
  {
    id: 4,
    name: "YETI NAME #12345",
    imageUrl: yetiOne,
  },
  {
    id: 5,
    name: "YETI NAME #12345",
    imageUrl: yetiFive,
  },
  {
    id: 6,
    name: "YETI NAME #12345",
    imageUrl: yetiFour,
  },
  {
    id: 7,
    name: "YETI NAME #12345",
    imageUrl: yetiTwo,
  },
  {
    id: 8,
    name: "YETI NAME #12345",
    imageUrl: yetiOne,
  },
  {
    id: 9,
    name: "YETI NAME #12345",
    imageUrl: yetiTwo,
  },
  {
    id: 10,
    name: "YETI NAME #12345",
    imageUrl: yetiFour,
  },
  {
    id: 11,
    name: "YETI NAME #12345",
    imageUrl: yetiOne,
  },
  {
    id: 12,
    name: "YETI NAME #12345",
    imageUrl: yetiFive,
  },
  {
    id: 13,
    name: "YETI NAME #12345",
    imageUrl: yetiFour,
  },
  {
    id: 14,
    name: "YETI NAME #12345",
    imageUrl: yetiTwo,
  },
];

const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <div className={classes.overflow}>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        pagination={pagination}
        modules={[Pagination]}
        className={classes.swiper}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }}
      >
        {yetis.map((yeti) => (
          <SwiperSlide className={classes.slideContainer} key={yeti.id}>
            <Yeti
              title={yeti.name}
              imageUrl={yeti.imageUrl}
              transform={yeti.transform}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
