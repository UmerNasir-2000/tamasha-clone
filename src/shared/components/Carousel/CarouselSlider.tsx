import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./CarouselSlider.module.css";
import { useEffect, useState } from "react";
import AxiosInstance from "../../../config/axios";
import { BASE_IMAGE_PATH } from "../../../utils/constants";

const CarouselSlider = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetchMovieImages();
  }, []);

  const fetchMovieImages = async () => {
    try {
      const { data } = await AxiosInstance.get("/movie/popular");

      const carouselImages = data.results
        .map((result: any) => `${BASE_IMAGE_PATH}${result.backdrop_path}`)
        .slice(0, 5);

      setImages(carouselImages);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {images.map((image) => (
          <SwiperSlide>
            <article className={styles["slider-container"]}>
              <img src={image} />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CarouselSlider;
