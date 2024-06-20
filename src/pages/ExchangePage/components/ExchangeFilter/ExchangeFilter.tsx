import { useState } from 'react';

import { Button } from '@/shared';

import styles from './ExchangeFilter.module.css';
import clsx from 'clsx';

import date from './date.json';

export const ExchangeFilter = () => {
  const [active, setActive] = useState(false);
  const [itemId, setItemId] = useState(0);

  return (
    <div className={styles.block}>
      <Button onClick={() => setActive(!active)} className={styles.btn} variant='filter'>
        {date[itemId]}
      </Button>

      <ul className={clsx(styles.list, active && styles.active)}>
        {date.map((item, index) => (
          <li onClick={() => setItemId(index)} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
