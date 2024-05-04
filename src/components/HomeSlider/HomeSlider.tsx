import styles from './HomeSlider.module.css';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { SwiperNavButton } from './components/SwiperNavButton';
import SwiperItems from './date.json';

export const HomeSlider = () => {
  return (
    <div className={styles.container}>
      <Swiper slidesPerView={3} spaceBetween={120} loop={true} modules={[Pagination, Navigation]}>
        {SwiperItems.map((item) => (
          <SwiperSlide>
            <img className={styles.img} src={item.image} alt='slider item' />
          </SwiperSlide>
        ))}
        <SwiperNavButton />
      </Swiper>
    </div>
  );
};
