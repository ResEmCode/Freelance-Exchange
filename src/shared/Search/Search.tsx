import { ComponentProps, forwardRef } from 'react';
import { Input } from '../Input/Input';
import styles from './Search.module.css';
import search from '../../../public/images/Search/search.jpg';
import clsx from 'clsx';

interface SearchProps extends ComponentProps<'input'> {}

export const Search = forwardRef<HTMLInputElement, SearchProps>(({ className, ...props }, ref) => {
  return (
    <div className={styles.wrapper}>
      <Input variant='search' {...props} className={clsx(styles.input, className)} ref={ref} />
      <img className={styles.img} src={search} alt='' />
    </div>
  );
});
