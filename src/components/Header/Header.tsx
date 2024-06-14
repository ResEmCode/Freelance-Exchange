import styles from './Header.module.css';
import background from '../../../public/images/Header/HeaderBackground.png';
import { Button } from '@/shared';
import { Typography } from '../Typography/Typography';

export const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={background} alt='background' className={styles.img} />
        <div className='container'>
          <div className={styles.inner}>
            <Typography variant='title96_regular' tag='p' className={styles.title}>
              Фриланс биржа с системой аукционов
            </Typography>
            <div className={styles.block}>
              <input className={styles.input} type='text' placeholder='Поиск...' />
              <Button variant='conteined'>Найти</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
