import { FC, useState } from 'react';
import styles from './ExchangeCard.module.css';
import clsx from 'clsx';

interface ExchangeCardProps {
  imageUrl: string;
  task: string;
  description: string;
  price: string;
  bargain: string;
}

const ExchangeCard: FC<ExchangeCardProps> = ({ imageUrl, task, description, price, bargain }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.image}>
          <img src={imageUrl} alt='image' className={styles.img} />
        </div>
        <div className={styles.desc}>
          <div className={styles.block}>
            <p className={styles.task}>Задача: {task}</p>
            <p className={clsx(styles.desc_block, active && styles.active)}>
              Описание: {description}
            </p>
          </div>
          <div className={styles.acc}>
            <span onClick={() => setActive(!active)}>Показать полностью</span>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.price}>Цена: {price}</p>
        <p className={styles.barg}>Торг: {bargain}</p>
      </div>
    </div>
  );
};

export default ExchangeCard;
