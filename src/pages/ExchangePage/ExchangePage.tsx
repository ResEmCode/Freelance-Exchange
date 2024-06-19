import { Typography } from '@/components';
import date from './date.json';
import styles from './ExchangePage.module.css';
import ExchangeCard from './components/ExchangeCard/ExchangeCard';
import { ExchangeSort } from './components/ExchangeSort/ExchangeSort';
import { Search } from '@/shared/Search/Search';
import { ExchangeFilter } from './components/ExchangeFilter/ExchangeFilter';

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
          <Search placeholder='Поиск...' />
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
