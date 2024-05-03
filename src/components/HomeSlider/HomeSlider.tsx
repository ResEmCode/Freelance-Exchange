import date from './date.json';

import styles from './HomeSlider.module.css';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import SwiperNavButton from './components/SwiperNavButton';

const { SwiperItem } = date;

const HomeSlider = () => {
  return (
    <div className={styles.container}>
      <Swiper slidesPerView={3} spaceBetween={120} loop={true} modules={[Pagination, Navigation]}>
        {SwiperItem.map((item) => (
          <SwiperSlide>
            <img className={styles.img} src={item.image} alt='' />
          </SwiperSlide>
        ))}
        <SwiperNavButton />
      </Swiper>
    </div>
  );
};

export default HomeSlider;
