import styles from './General.module.css';
import { Typography } from '@/components';
import { Button, Input } from '@/shared';
import InfoInput from '../InfoInput/InfoInput';

export const General = () => {
  return (
    <form className={styles.form}>
      <InfoInput title='Логин'>
        <Input variant='third' />
      </InfoInput>
      <InfoInput title='Телефон'>
        <Input variant='third' />
      </InfoInput>
      <InfoInput title='Email'>
        <Input variant='third' />
      </InfoInput>
      <InfoInput title='Часовой пояс'>
        <Input variant='third' />
      </InfoInput>
      <div className={styles.block}>
        <div>
          <Typography className={styles.title} variant='paragraph20_regular'>
            Пароль
          </Typography>
          <Input className={styles.input} variant='third' />
        </div>
        <div>
          <Typography className={styles.title} variant='paragraph20_regular'>
            Новый пароль
          </Typography>
          <Input className={styles.input} variant='third' />
        </div>
      </div>
      <div className={styles.inner}>
        <Button className={styles.btn} variant='conteined'>
          Сохранить
        </Button>
        <Typography className={styles.delete} variant='paragraph20_regular'>
          Удалить аккаунт
        </Typography>
      </div>
    </form>
  );
};
