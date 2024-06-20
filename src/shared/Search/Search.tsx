import { ComponentProps, forwardRef } from 'react';

import { Input } from '../Input/Input';

import styles from './Search.module.css';
import clsx from 'clsx';

import SearchSvg from '@/assets/images/svg/search.svg';

type SearchProps = ComponentProps<'div'>;

export const Search = forwardRef<HTMLInputElement, SearchProps>(({ className, ...props }, ref) => {
  return (
    <div className={clsx(styles.search, className)}>
      <Input
        className={styles.input}
        {...props}
        ref={ref}
        variant='auction'
        placeholder='Поиск...'
      />
      <img className={styles.img} src={SearchSvg} alt='search' />
    </div>
  );
});
