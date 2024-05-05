import styles from './HomeDesc.module.css';
import { OfferBlock } from './components';

import { InfoBlock } from './components/InfoBlock/InfoBlock';
import SmileImage from '@/assets/images/HomeDesc/icon.png';

import date from './date.json';

export const HomeDesc = () => {
  return (
    <div className={styles.wrapper}>
      <OfferBlock />
      <div className='container'>
        <div className={styles.inner}>
          <InfoBlock title={date[0].title}>{date[0].text}</InfoBlock>
          <img className={styles.img} src={SmileImage} alt='icon' />
          <InfoBlock title={date[1].title}>{date[1].text}</InfoBlock>
        </div>
      </div>
    </div>
  );
};
