import Logo from '@/assets/images/logo.svg';
import { Typography } from '@/components';

import data from '../../date.json';

import styles from './InfoStatistics.module.css';

const statistics = data.Statistics;

export const InfoStatistics = () => {
  return (
    <ul className={styles.items}>
      {statistics.map((item) => {
        return (
          <li key={item.title} className={styles.item}>
            <h2 className={styles.title}>
              {item.logo && <img className={styles.logo} src={Logo} alt='logo' />}
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
