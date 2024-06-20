import { Input } from '@/shared';

import styles from './ExchangeSort.module.css';

interface ExchangeSortProps {
  title: string;
}

export const ExchangeSort = ({ title }: ExchangeSortProps) => {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        <Input className={styles.input} variant='auction' type='checkbox' />
        {title}
      </label>
    </form>
  );
};
