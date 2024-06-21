import { Typography } from '@/components';
import { Search } from '@/shared/Search/Search';

import { ExchangeCard, ExchangeFilter, ExchangeSort } from './components';

import styles from './ExchangePage.module.css';
import date from './date.json';

export const ExchangePage = () => {
  return (
    <div className='container'>
      <div className={styles.inner}>
        <div className={styles.sort}>
          <Typography variant='title24_regular' tag='h3'>
            Биржа проектов
          </Typography>
          <ExchangeSort />
          <Search />
          <ExchangeFilter />
        </div>
        <div className={styles.block}>
          {date.Card.map((obj, index) => (
            <ExchangeCard key={index} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
};
