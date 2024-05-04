import { Typography } from '@/components/Typography/Typography';
import styles from './OfferBlock.module.css';
import { Button } from '@/shared';
import BgImage from '@/assets/images/HomeDesc/bg.jpg';

export const OfferBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img_block}>
        <img className={styles.img} src={BgImage} alt='background' />
        <div className='container'>
          <div className={styles.inner}>
            <Typography tag='h2' variant='title96_regular' className={styles.title}>
              Закажите услугу прямо сейчас
            </Typography>
            <Button className={styles.btn} variant='conteined'>
              Начать
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
