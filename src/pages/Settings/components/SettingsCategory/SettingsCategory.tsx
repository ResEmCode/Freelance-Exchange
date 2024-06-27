import { useNavigate } from 'react-router-dom';

import { Typography } from '@/components';

import styles from './SettingsCategory.module.css';
import clsx from 'clsx';

import date from './date.json';

interface SettingsCategoryProps {
  // setIndexPage: (index: number) => void;
  indexPage: number;
}

export const SettingsCategory = ({ indexPage }: SettingsCategoryProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.inner}>
      <Typography className={styles.title} variant='title24_regular'>
        Настройки
      </Typography>
      <ul className={styles.items}>
        {date.map((item, index) => (
          <li
            onClick={() => navigate(item.path)}
            key={item.title}
            className={clsx(styles.item, index === indexPage && styles.active)}
            role='button'
            tabIndex={0}
            onKeyPress={(event) => {
              if (event.key === 'Enter') navigate(item.path);
            }}
          >
            <Typography variant='paragraph16_regular' tag='p'>
              {item.title}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};
