import { Input } from '@/shared';
import styles from './ExchangeSort.module.css';
import { FC } from 'react';

interface ExchangeSortProps {
  title: string;
}

export const ExchangeSort: FC<ExchangeSortProps> = ({ title }) => {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        <Input className={styles.input} variant='auction' type='checkbox' />
        {title}
      </label>
    </form>
  );
};
