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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const yetis = [
  {
    id: 1,
    name: `META YETI #${getRandomInt(9999)}`,
    imageUrl: yetiOne,
  },
  {
    id: 2,
    name: `META YETI #${getRandomInt(9999)}`,
    imageUrl: yetiTwo,
  },
  {
    id: 3,
    name: `META YETI #${getRandomInt(9999)}`,
    imageUrl: yetiFour,
  },
  {
    id: 4,
    name: `META YETI #${getRandomInt(9999)}`,
    imageUrl: yetiOne,
  },
  {
    id: 5,
    name: `META YETI #${getRandomInt(9999)}`,
    imageUrl: yetiFive,
  },
  {
    id: 6,
    name: `META YETI #${getRandomInt(9999)}`,
    imageUrl: yetiFour,
  },
  {
    id: 7,
    name: `META YETI #${getRandomInt(9999)}`,
    imageUrl: yetiTwo,
  },
  {
    id: 8,
    name: `META YETI #${getRandomInt(9999)}`,
    imageUrl: yetiOne,
  },
  {
    id: 9,
    name: `META YETI #${getRandomInt(9999)}`,
    imageUrl: yetiTwo,
  },
  {
    id: 10,
    name: `META YETI #${getRandomInt(9999)}`,
    imageUrl: yetiFour,
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
        pagination={pagination}
        modules={[Pagination]}
        className={classes.swiper}
        slidesPerView={"auto"}
        loop={true}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1500: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          1800: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
        }}
      >
        {yetis.map((yeti) => (
          <SwiperSlide
            className={`${classes.slideContainer} flex-center`}
            key={yeti.id}
          >
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
