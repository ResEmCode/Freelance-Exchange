import { Button } from '@/shared';
import styles from './AuctionCard.module.css';
import { FC } from 'react';

interface IAuction {
  number: string;
  image: string;
  title: string;
  author: string;
  price: string;
}

export const AuctionCard: FC<IAuction> = ({ number, image, title, author, price }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.number}>{number}</p>
        <img className={styles.img} src={image} alt='' />
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

export default AuctionCard;
