import styles from './Header.module.css';
import background from '../../../public/images/Header/HeaderBackground.png';
import { Button } from '@/shared';

export const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={background} alt='background' className={styles.img} />
        <div className='container'>
          <div className={styles.inner}>
            <p className={styles.text}>Фриланс биржа с системой аукционов </p>
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
