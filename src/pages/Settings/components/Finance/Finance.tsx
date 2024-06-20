import { Button, Input } from '@/shared';

import styles from './Finance.module.css';

import SberImg from '../../../../../public/images/Finance/sber.png';
import QiwiImg from '../../../../../public/images/Finance/qiwi.png';
import webmoney from '../../../../../public/images/Finance/webmoney.png';

export const Finance = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.block}>
        <img className={styles.img} src={SberImg} alt='' />
        <Input variant='third' placeholder='Сбербанк' />;
      </div>
      <div className={styles.block}>
        <img className={styles.img} src={QiwiImg} alt='' />
        <Input variant='third' placeholder='Киви' />;
      </div>
      <div className={styles.block}>
        <img className={styles.img} src={webmoney} alt='' />
        <Input variant='third' placeholder='Вебмани' />;
      </div>
      <Button className={styles.btn} variant='conteined'>
        Сохранить кошельки
      </Button>
    </div>
  );
};
