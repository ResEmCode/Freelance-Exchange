import React from 'react';

import styles from './AuctionRandomCard.module.css';

import unlike from '../../../../../public/images/RandomAuction/unlike.svg';
import like from '../../../../../public/images/RandomAuction/like.svg';

interface AuctionRandomCardProps {
  image: string;
  title: string;
  price: string;
}

export const AuctionRandomCard = ({ image, title, price }: AuctionRandomCardProps) => {
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
