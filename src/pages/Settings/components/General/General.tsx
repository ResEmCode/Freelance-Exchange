import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { GeneralSchema, generalSchema } from '@/pages/Settings/constans/GeneralSchema';

import { Typography } from '@/components';
import { Button, Input } from '@/shared';

import { InfoInput } from '../InfoInput/InfoInput';

import styles from './General.module.css';

export const General = () => {
  const {
    register,
    formState: { errors }
  } = useForm<GeneralSchema>({
    resolver: zodResolver(generalSchema),
    mode: 'onChange'
  });

  return (
    <form className={styles.form}>
      <InfoInput error={errors.login?.message} title='Логин'>
        <Input
          className={styles.input}
          variant='third'
          {...register('login')}
          error={errors.login?.message}
          placeholder='введите логин'
        />
      </InfoInput>
      <InfoInput error={errors.phone?.message} title='Телефон'>
        <Input
          className={styles.input}
          variant='third'
          {...register('phone')}
          error={errors.phone?.message}
          placeholder='введите телефон'
        />
      </InfoInput>
      <InfoInput error={errors.email?.message} title='Email'>
        <Input
          className={styles.input}
          variant='third'
          {...register('email')}
          error={errors.email?.message}
          placeholder='введите email'
        />
      </InfoInput>
      <InfoInput error={errors.time?.message} title='Часовой пояс'>
        <Input
          className={styles.input}
          variant='third'
          {...register('time')}
          error={errors.time?.message}
          placeholder='введите часовой пояс'
        />
      </InfoInput>
      <InfoInput className={styles.block} error={errors.password?.message || errors.passwordMust?.message} title='Пароль'>
        <Input
          className={styles.input}
          variant='third'
          {...register('password')}
          error={errors.time?.message}
          placeholder='введите пароль'
        />
        <Input
          className={styles.input}
          error={errors.passwordMust?.message}
          {...register('passwordMust')}
          variant='third'
          placeholder='повторите пароль'
        />
      </InfoInput>

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
