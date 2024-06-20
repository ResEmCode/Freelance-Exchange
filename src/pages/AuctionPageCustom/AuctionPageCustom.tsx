import { useNavigate } from 'react-router-dom';

import { Typography, AuctionCard } from '@/components';
import { Button } from '@/shared';

import styles from './AuctionPageCustom.module.css';

import date from '../../components/AuctionCard/date.json';

export const AuctionPageCustom = () => {
  const navigate = useNavigate();

  const toPath = () => {
    navigate('/randomauction');
  };

  return (
    <div className='container'>
      <div className={styles.inner}>
        {date.map((obj, id) => (
          <AuctionCard key={id} {...obj} />
        ))}
      </div>

      <Button variant='conteined' className={styles.btn} onClick={toPath}>
        <Typography tag='p' variant='paragraph20_regular'>
          Случайный аукцион
        </Typography>
      </Button>
    </div>
  );
};
