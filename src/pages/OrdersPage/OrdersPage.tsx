import { Typography } from '@/components';

import { OrderCard } from './components';

import styles from './OrdersPage.module.css';

import data from './data.json';

export const OrdersPage = () => {
  const cards = data.cards;

  return (
    <div className='container'>
      <div className={styles.inner}>
        <Typography className={styles.title} tag='h2' variant='paragraph30_medium'>
          Мои заказы
        </Typography>
        <ul className={styles.list}>
          {cards.map((card) => (
            <OrderCard key={card.title} {...card} />
          ))}
        </ul>
      </div>
    </div>
  );
};
