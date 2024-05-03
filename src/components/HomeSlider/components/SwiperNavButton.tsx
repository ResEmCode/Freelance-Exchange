import next from '../../../../public/images/HomeSlider/next.png';
import prev from '../../../../public/images/HomeSlider/prev.png';
import styles from './SwiperNavButton.module.css';

import { useSwiper } from 'swiper/react';

const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <>
      <img onClick={() => swiper.slideNext()} src={next} alt='' className={styles.next} />
      <img onClick={() => swiper.slidePrev()} src={prev} alt='' className={styles.prev} />;
    </>
  );
};

export default SwiperNavButton;
