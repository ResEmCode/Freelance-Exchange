import styles from './Finance.module.css';
import { Button, Input } from '@/shared';
import sber from '../../../../../public/images/Finance/sber.png';
import qiwi from '../../../../../public/images/Finance/qiwi.png';
import webmoney from '../../../../../public/images/Finance/webmoney.png';

export const Finance = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.block}>
        <img className={styles.img} src={sber} alt='' />
        <Input variant='third' placeholder='Сбербанк' />;
      </div>
      <div className={styles.block}>
        <img className={styles.img} src={qiwi} alt='' />
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
