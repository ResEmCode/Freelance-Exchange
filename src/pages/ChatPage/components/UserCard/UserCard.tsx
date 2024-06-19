import { Typography } from '@/components';
import styles from './User.module.css';
import TickSvg from '@/assets/images/svg/tick.svg';
import { useState } from 'react';
import { Star } from '@/assets/svg/Icons/Star';
import clsx from 'clsx';

interface UserCardProps {
  imageUrl: string;
  title: string;
  lastMessage: string;
}

export const UserCard = ({ imageUrl, title, lastMessage }: UserCardProps) => {
  const [isFavorites, setIsFavorites] = useState(false);

  return (
    <li className={styles.user}>
      <div className={styles.info}>
        <img className={styles.img} src={imageUrl} alt='avatarka' />
        <div>
          <Typography tag='h3' variant='title20_medium'>
            {title}
          </Typography>
          <span className={styles.text}>{lastMessage}</span>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => setIsFavorites((prev) => !prev)}>
          {/* <img className={styles.star} src={StarSvg} alt='' /> */}
          <Star className={clsx(isFavorites && styles.active)} />
        </button>
        <button>
          <img className={styles.tick} src={TickSvg} alt='' />
        </button>
      </div>
    </li>
  );
};
