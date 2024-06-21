import { Checkbox } from '@/shared';

import styles from './ExchangeSort.module.css';

import date from '../../date.json';

export const ExchangeSort = () => {
  return (
    <form className={styles.form}>
      {date.Sort.map((item) => (
        <Checkbox key={item}>{item}</Checkbox>
      ))}
    </form>
  );
};
