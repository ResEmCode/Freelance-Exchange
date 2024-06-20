import { Button, Input } from '@/shared';
import { Typography } from '@/components';

import styles from './Header.module.css';
import BackgroundImg from '../../../public/images/Header/HeaderBackground.png';

export const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={BackgroundImg} alt='background' className={styles.img} />
        <div className='container'>
          <div className={styles.inner}>
            <Typography variant='title96_regular' tag='p' className={styles.title}>
              Фриланс биржа с системой аукционов
            </Typography>
            <div className={styles.block}>
              <Input className={styles.input} variant='search' placeholder='Поиск...'/>
              <Button variant='conteined'>Найти</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
