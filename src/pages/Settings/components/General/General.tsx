import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SettingsSchema, settingsSchema } from '@/pages/Settings/constans/SettingsSchema';

import { Typography } from '@/components';
import { Button, Input } from '@/shared';

import {InfoInput} from '../InfoInput/InfoInput';

import styles from './General.module.css';

export const General = () => {
  const {
    register,
    formState: { errors }
  } = useForm<SettingsSchema>({
    resolver: zodResolver(settingsSchema),
    mode: 'onChange'
  });

  return (
    <form className={styles.form}>
      <InfoInput text={errors.login?.message} title='Логин'>
        <Input variant='third' {...register('login')} error={errors.login?.message} />
      </InfoInput>
      <InfoInput text={errors.phone?.message} title='Телефон'>
        <Input variant='third' {...register('phone')} error={errors.phone?.message} />
      </InfoInput>
      <InfoInput text={errors.email?.message} title='Email'>
        <Input variant='third' {...register('email')} error={errors.email?.message} />
      </InfoInput>
      <InfoInput text={errors.time?.message} title='Часовой пояс'>
        <Input variant='third' {...register('time')} error={errors.time?.message} />
      </InfoInput>
      <div className={styles.block}>
        <div>
          <div className={styles.wrap}>
            <Typography className={styles.title} variant='paragraph20_regular'>
              Пароль
            </Typography>
            <span className={styles.err}>{errors.password?.message}</span>
          </div>
          <Input
            className={styles.input}
            error={errors.password?.message}
            {...register('password')}
            variant='third'
          />
        </div>
        <div>
          <div className={styles.wrap}>
            <Typography className={styles.title} variant='paragraph20_regular'>
              Пароль
            </Typography>
            <span className={styles.err}>{errors.passwordMust?.message}</span>
          </div>
          <Input
            className={styles.input}
            error={errors.passwordMust?.message}
            {...register('passwordMust')}
            variant='third'
          />
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
