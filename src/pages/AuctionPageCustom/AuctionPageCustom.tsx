import styles from './AuctionPageCustom.module.css';
import date from '../../components/AuctionCard/date.json';
import { Button } from '@/shared';
import { Typography, AuctionCard } from '@/components';
import { useNavigate } from 'react-router-dom';

export const AuctionPageCustom = () => {
  const navigate = useNavigate();

  const toPath = () => {
    navigate('/auctionrandom');
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
