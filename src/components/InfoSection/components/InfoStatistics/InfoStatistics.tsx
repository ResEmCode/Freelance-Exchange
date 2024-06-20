import { Typography } from '@/components';

import styles from './InfoStatistics.module.css';
import { Logo } from '@/assets/svg';

import data from '../../date.json';

const statistics = data.Statistics;

export const InfoStatistics = () => {
  return (
    <ul className={styles.items}>
      {statistics.map((item) => {
        return (
          <li key={item.title} className={styles.item}>
            <h2 className={styles.title}>
              {item.logo && <Logo size={25} className={styles.icon} />}
              {item.title}
            </h2>
            <Typography className={styles.desc} variant='paragraph16_regular' tag='p'>
              {item.desc}
            </Typography>
          </li>
        );
      })}
    </ul>
  );
};
