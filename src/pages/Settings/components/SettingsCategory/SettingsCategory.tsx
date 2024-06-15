import { Typography } from '@/components';
import date from './date.json';
import styles from './SettingsCategory.module.css';
import { FC } from 'react';

interface SettingsCategoryProps {
  setIndexPage: (index: number) => void;
}

const SettingsCategory: FC<SettingsCategoryProps> = ({ setIndexPage }) => {
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

export default SettingsCategory;
