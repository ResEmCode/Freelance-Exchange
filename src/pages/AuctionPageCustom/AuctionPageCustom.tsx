import AuctionCard from '@/components/AuctionCard/AuctionCard';

import styles from './AuctionPageCustom.module.css';
import date from '../../components/AuctionCard/date.json';

export const AuctionPageCustom = () => {
  return (
    <div className='container'>
      <div className={styles.inner}>
        {date.map((obj, id) => (
          <AuctionCard key={id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default AuctionPageCustom;
