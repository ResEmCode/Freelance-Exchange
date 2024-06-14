import { Typography } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './AddAuctionPage.module.css';
import { Button, Input, Textarea } from '@/shared';
import { SubmitHandler, useForm } from 'react-hook-form';
import { auctionSchema, type AuctionSchema } from './constans/AuctionScheme';
import { ChoiceBlock } from './components/ChoiceBlock/ChoiceBlock';
import { DragModal } from '@/shared/DragModal/DragModal';
import { auctionTimeArray, bitTimeArray } from './data.json';

export const AddAuctionPage = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit
  } = useForm<AuctionSchema>({
    resolver: zodResolver(auctionSchema),
    mode: 'onBlur'
  });

  console.log(errors);
  const onSubmit: SubmitHandler<AuctionSchema> = (data) => {
    alert('Спасибо за заявку:' + data);
    reset();
  };

  return (
    <div className='container'>
      <Typography tag='h2' variant='title32_bold' className={styles.title}>
        Добавление товара на аукцион
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className={styles.list}>
          <ChoiceBlock text='1. Имя слота'>
            <Input
              variant='auction'
              placeholder='Картина ...'
              className={styles.input}
              {...register('name')}
              error={errors.name?.message}
            />
          </ChoiceBlock>

          <ChoiceBlock text='2. Описание слота'>
            <Textarea
              variant='auction'
              placeholder='Слот связан с ...'
              className={styles.textarea}
              {...register('desc')}
              error={errors.desc?.message}
            />
          </ChoiceBlock>

          <ChoiceBlock text='3. Предварительная цена'>
            <Input
              variant='auction'
              placeholder='Число в $...'
              className={styles.input}
              {...register('startPrice', { valueAsNumber: true })}
              error={errors.startPrice?.message}
            />
          </ChoiceBlock>

          <ChoiceBlock text='4. Время ставки'>
            <div className={styles.radio_block}>
              {bitTimeArray.map((item) => (
                <label key={item} className={styles.label}>
                  <input type='radio' value={item} checked {...register('bidTime')} /> {item}
                </label>
              ))}
            </div>
          </ChoiceBlock>

          <ChoiceBlock text='5. Время аукциона'>
            <div className={styles.radio_block}>
              {auctionTimeArray.map((item) => (
                <label key={item} className={styles.label}>
                  <input type='radio' value={item} checked {...register('auctionTime')} /> {item}
                </label>
              ))}
            </div>
          </ChoiceBlock>

          <ChoiceBlock text='6. Картинка слота'>
            <DragModal className={styles.darg_modal} />
          </ChoiceBlock>
        </ul>

        <Button className={styles.btn} variant='conteined'>
          Создать слот
        </Button>
      </form>
    </div>
  );
};
