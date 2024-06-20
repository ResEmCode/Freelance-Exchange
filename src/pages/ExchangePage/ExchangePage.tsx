import { Typography } from '@/components';
import { Search } from '@/shared/Search/Search';

import { ExchangeSort, ExchangeCard, ExchangeFilter } from './components';

import styles from './ExchangePage.module.css';
import date from './date.json';

export const ExchangePage = () => {
  return (
    <div className='container'>
      <Typography className={styles.title} variant='title24_regular' tag='h3'>
        Биржа проектов
      </Typography>
      <div className={styles.inner}>
        <div className={styles.sort}>
          <div>
            {date.Sort.map((item, index) => (
              <ExchangeSort key={index} title={item} />
            ))}
          </div>
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
