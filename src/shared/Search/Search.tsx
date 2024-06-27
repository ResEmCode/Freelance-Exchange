import { ComponentProps, useRef } from 'react';

import styles from './Search.module.css';
import clsx from 'clsx';

import SearchSvg from '@/assets/images/svg/search.svg';

type SearchProps = ComponentProps<'div'>;

export const Search = ({ className, ...props }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={clsx(styles.search, className)}
    >
      <input
        role='input'
        type='text'
        tabIndex={0}
        className={styles.input}
        {...props}
        ref={inputRef}
        placeholder='Поиск...'
      />
      <img
        onClick={() => inputRef.current?.focus()}
        className={styles.img}
        src={SearchSvg}
        alt='search'
      />
    </div>
  );
};
