import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { SwiperNavButton } from '../RandomAuctionPage/components/SwiperNavButton';
import RandomAuction from './RandomAuction.json';
import styles from './RandomAuctionPage.module.css';
import { AuctionRandomCard } from './components/AuctionRandomCard/AuctionRandomCard';

export const RandomAuctionPage = () => {
  return (
    <div className='container'>
      <h1 className={styles.title}>Случайный аукцион</h1>
      <div className={styles.inner}>
        <Swiper
          slidesPerView={1}
          spaceBetween={120}
          loop={true}
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev'
          }}
        >
          <SwiperNavButton />
          {RandomAuction.map((item) => (
            <SwiperSlide key={item.id}>
              <AuctionRandomCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
