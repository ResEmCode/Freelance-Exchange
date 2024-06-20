import { Typography } from '@/components';

import styles from './SettingsCategory.module.css';

import date from './date.json';

interface SettingsCategoryProps {
  setIndexPage: (index: number) => void;
}

export const SettingsCategory = ({ setIndexPage }: SettingsCategoryProps) => {
  return (
    <>
      <Typography className={styles.title} variant='title24_regular'>
        Настройки
      </Typography>
      <ul className={styles.items}>
        {date.map((item, index) => (
          <li onClick={() => setIndexPage(index)} key={item} className={styles.item}>
            <a href='#!'>
              <Typography variant='paragraph16_regular' tag='p'>
                {item}
              </Typography>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
