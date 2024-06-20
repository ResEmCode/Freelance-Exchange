import { Button } from '@/shared';

import styles from './AuctionCard.module.css';

export interface AuctionCardProps {
  number: string;
  image: string;
  title: string;
  author: string;
  price: string;
}

export const AuctionCard = ({ number, image, title, author, price }: AuctionCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.number}>{number}</p>
        <img className={styles.img} src={image} alt='auction' />
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.inner}>
          <span className={styles.author}>{author}</span>
          <span className={styles.price}>{price}</span>
        </div>
      </div>
      <Button variant='offer'>Перейти к слоту</Button>
    </div>
  );
};

