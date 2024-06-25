import { ComponentProps, useRef } from 'react';

import { Input } from '../Inputs/Input/Input';

import styles from './Search.module.css';
import clsx from 'clsx';

import SearchSvg from '@/assets/images/svg/search.svg';

type SearchProps = ComponentProps<'div'>;

export const Search = ({ className, ...props }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={clsx(styles.search, className)}>
      <Input
        className={styles.input}
        {...props}
        ref={inputRef}
        variant='auction'
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
