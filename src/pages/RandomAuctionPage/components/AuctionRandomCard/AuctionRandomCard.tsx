import React, { FC } from 'react';
import like from '../../../../../public/images/RandomAuction/like.svg';
import unlike from '../../../../../public/images/RandomAuction/unlike.svg';
import styles from './AuctionRandomCard.module.css';
import 'swiper/swiper-bundle.css';

interface AuctionRandomCardProps {
  image: string;
  title: string;
  price: string;
}

export const AuctionRandomCard: FC<AuctionRandomCardProps> = ({ image, title, price }) => {
  const [active, setActive] = React.useState(false);
  return (
    <>
      <img className={styles.img} src={image} alt='slider item' />
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>{price}</p>
      <img
        src={active ? like : unlike}
        onClick={() => setActive(!active)}
        alt='like'
        className={styles.unlike}
      />
    </>
  );
};
