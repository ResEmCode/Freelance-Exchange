import { Button, Input } from '@/shared';

import styles from './Finance.module.css';

import SberImg from '../../../../../public/images/Finance/sber.png';
import QiwiImg from '../../../../../public/images/Finance/qiwi.png';
import webmoney from '../../../../../public/images/Finance/webmoney.png';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FinanceSchema, financeSchema } from '../../constans/FinanceSchema';

export const Finance = () => {
  const {
    register,
    formState: { errors }
  } = useForm<FinanceSchema>({
    resolver: zodResolver(financeSchema),
    mode: 'onBlur'
  });
  return (
    <div className={styles.inner}>
      <div className={styles.block}>
        <img className={styles.img} src={SberImg} alt='' />
        <Input
          className={styles.input}
          variant='third'
          placeholder='Сбербанк'
          error={errors.sberbank?.message}
          {...register('sberbank')}
        />
      </div>
      <div className={styles.block}>
        <img className={styles.img} src={QiwiImg} alt='' />
        <Input
          className={styles.input}
          variant='third'
          placeholder='Киви'
          error={errors.qiwi?.message}
          {...register('qiwi')}
        />
      </div>
      <div className={styles.block}>
        <img className={styles.img} src={webmoney} alt='' />
        <Input
          className={styles.input}
          variant='third'
          placeholder='Вебмани'
          error={errors.webmoney?.message}
          {...register('webmoney')}
        />
      </div>
      <Button className={styles.btn} variant='conteined'>
        Сохранить кошельки
      </Button>
    </div>
  );
};
