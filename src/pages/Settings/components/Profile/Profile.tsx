import { Typography } from '@/components';
import { Button, Input, Textarea } from '@/shared';

import { InfoInput } from '../InfoInput/InfoInput';

import styles from './Profile.module.css';

import date from './date.json';

export const Profile = () => {
  return (
    <form className={styles.form}>
      <InfoInput title='Имя'>
        <Input variant='third' />
      </InfoInput>
      <InfoInput title='Фото'>
        <img className={styles.img} src={date[0].imageUrl} alt='' />
        <div className={styles.block}>
          <a href='#!'>
            <Typography variant='paragraph16_regular' tag='p'>
              изменить
            </Typography>
          </a>
          <span>|</span>
          <a href='#!'>
            <Typography variant='paragraph16_regular' tag='p'>
              удалить
            </Typography>
          </a>
        </div>
      </InfoInput>
      <InfoInput title='Вы по специальности'>
        <Input variant='third' />
      </InfoInput>
      <Textarea variant='primary' maxLength={1000} placeholder='О себе' />
      <InfoInput title='Страна'>
        <Input variant='third' />
      </InfoInput>
      <div className={styles.inner}>
        <Button className={styles.btn} variant='conteined'>
          Сохранить
        </Button>
        <Typography className={styles.delete} variant='paragraph20_regular'>
          Посмотреть профиль
        </Typography>
      </div>
    </form>
  );
};
