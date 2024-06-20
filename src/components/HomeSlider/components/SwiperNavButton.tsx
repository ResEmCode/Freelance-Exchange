import { useSwiper } from 'swiper/react';

import clsx from 'clsx';
import styles from './SwiperNavButton.module.css';

import next from '../../../../public/images/HomeSlider/next.png';
import prev from '../../../../public/images/HomeSlider/prev.png';


export const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <>
      <img
        onClick={() => swiper.slideNext()}
        src={next}
        alt=''
        className={clsx(styles.btn, styles.next, 'swiper-next')}
      />
      <img
        onClick={() => swiper.slidePrev()}
        src={prev}
        alt=''
        className={clsx(styles.btn, styles.prev, 'swiper-prev')}
      />
    </>
  );
};
