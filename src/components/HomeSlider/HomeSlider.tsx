import styles from './HomeSlider.module.css';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { SwiperNavButton } from './components/SwiperNavButton';
import SwiperItems from './date.json';

export const HomeSlider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Swiper
          slidesPerView={3}
          spaceBetween={120}
          loop={true}
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
        >
          {SwiperItems.map((item, index) => (
            <SwiperSlide key={index}>
              <img className={styles.img} src={item.image} alt='slider item' />
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperNavButton />
      </div>
    </div>
  );
};
