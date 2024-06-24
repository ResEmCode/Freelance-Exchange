import { Typography } from '@/components';
import { Button, Input, Textarea } from '@/shared';

import { InfoInput } from '../InfoInput/InfoInput';

import styles from './Profile.module.css';

import date from './date.json';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProfileSchema, profileSchema } from '../../constans';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors }
  } = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    mode: 'onBlur'
  });

  return (
    <form className={styles.form}>
      <InfoInput title='Имя' error={errors.name?.message}>
        <Input
          variant='third'
          error={errors.name?.message}
          placeholder='введите имя'
          className={styles.input}
          {...register('name')}
        />
      </InfoInput>
      <InfoInput title='Фото'>
        <img className={styles.img} src={date[0].imageUrl} alt='' />
        <div className={styles.block}>
          <Button variant='outline'>изменить</Button>
          <span>|</span>
          <Button variant='outline'>удалить</Button>
        </div>
      </InfoInput>
      <InfoInput title='Вы по специальности' error={errors.work?.message}>
        <Input
          variant='third'
          error={errors.work?.message}
          placeholder='введите специальность'
          className={styles.input}
          {...register('work')}
        />
      </InfoInput>
      <Textarea
        className={styles.textarea}
        variant='primary'
        maxLength={1000}
        placeholder='О себе'
        error={errors.about?.message}
        {...register('about')}
      />
      <InfoInput title='Страна' error={errors.country?.message}>
        <Input
          variant='third'
          error={errors.country?.message}
          placeholder='введите страну'
          className={styles.input}
          {...register('country')}
        />
      </InfoInput>
      <div className={styles.inner}>
        <Button className={styles.btn} variant='conteined'>
          Сохранить
        </Button>
        <Typography
          className={styles.check_profile}
          variant='paragraph20_regular'
          onClick={() => navigate('/profile')}
        >
          Посмотреть профиль
        </Typography>
      </div>
    </form>
  );
};
