
import { Input } from '../Input/Input';
import SearchSvg from '@/assets/images/svg/search.svg';
import styles from './Search.module.css';
import clsx from 'clsx';
import { ComponentProps, forwardRef } from 'react';

interface SearchProps extends ComponentProps<'div'> {}
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
