import { Typography } from '../Typography/Typography';

import styles from './WhyUsSection.module.css';
import clsx from 'clsx';

import Arrow1 from '@/assets/images/WhyUsSection/arrow-1.png';
import Arrow2 from '@/assets/images/WhyUsSection/arrow-2.png';
import Circle1 from '@/assets/images/WhyUsSection/circle-1.png';
import Circle2 from '@/assets/images/WhyUsSection/circle-2.png';
import Circle3 from '@/assets/images/WhyUsSection/circle-3.png';

export const WhyUsSection = () => {
  return (
    <div className={styles.section}>
      <div className='container'>
        <div className={styles.inner}>
          <h2 className={styles.title}>Почему мы?</h2>
          <div className={styles.info}>
            <ul className={styles.list}>
              <li className={clsx(styles.item, styles.item_first)}>
                <Typography className={styles.text} variant='paragraph30_medium' tag='p'>
                  Мы занимаем главное место на рынке фриланса
                </Typography>
                <div className={styles.circle}>
                  <img className={styles.img} src={Circle1} alt='circle 1' />
                </div>
              </li>
              <li className={clsx(styles.arrow, styles.arrow_first)}>
                <img src={Arrow1} alt='Arrow 1' />
              </li>
              <li className={clsx(styles.item, styles.item_second)}>
                <div className={styles.circle}>
                  <img className={styles.img} src={Circle2} alt='circle 2' />
                </div>
                <Typography className={styles.text} variant='paragraph30_medium' tag='p'>
                  Высококвалифицированные исполнители
                </Typography>
              </li>
              <li className={clsx(styles.arrow, styles.arrow_second)}>
                <img src={Arrow2} alt='Arrow 2' />
              </li>
              <li className={clsx(styles.item, styles.item_third)}>
                <Typography className={styles.text} variant='paragraph30_medium' tag='p'>
                  Гарантия возврата средств 100%
                </Typography>
                <div className={styles.circle}>
                  <img className={styles.img} src={Circle3} alt='circle 3' />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
