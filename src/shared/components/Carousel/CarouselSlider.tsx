import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Fragment } from "react";

export interface ICarouselSliderProps {
  images: string[];
}

const CarouselSlider = () => {
  return (
    <Fragment>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://images.tntdrama.com/tnt/$dyna_params/https%3A%2F%2Fi.cdn.tntdrama.com%2Fassets%2Fimages%2F2022%2F05%2FAvengers-Endgame-KA-1600x900.jpg"
            width="100%"
            height="400"
            style={{ objectFit: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://writinguntilragnarokhome.files.wordpress.com/2021/01/avengers-endgame-review.jpg?w=1280"
            width="100%"
            height="400"
            style={{ objectFit: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4469/674469-h"
            width="100%"
            height="400"
            style={{ objectFit: "contain" }}
          />
        </SwiperSlide>
      </Swiper>
    </Fragment>
  );
};

export default CarouselSlider;
