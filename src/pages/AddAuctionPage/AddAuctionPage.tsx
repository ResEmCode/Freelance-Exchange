import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { auctionSchema, type AuctionSchema } from './constans/AuctionScheme';

import { Typography } from '@/components';
import { Button, Input, Textarea, DragModal } from '@/shared';

import { ChoiceBlock } from './components';

import styles from './AddAuctionPage.module.css';

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
          {/* {InfoBlocks.map((block) => (
            <ChoiceBlock key={block.value} text={block.title} error={errors[block.value]?.message}>
              <Input
                variant='auction'
                placeholder={block.placeholder}
                className={styles.input}
                {...register(block.value)}
                error={errors[block.value]?.message}
              />
            </ChoiceBlock>
          ))} */}
          
          <ChoiceBlock text='1. Имя слота' error={errors.name?.message}>
            <Input
              variant='auction'
              placeholder='Картина ...'
              className={styles.input}
              {...register('name')}
              error={errors.name?.message}
            />
          </ChoiceBlock>

          <ChoiceBlock text='2. Описание слота' error={errors.desc?.message}>
            <Textarea
              variant='auction'
              placeholder='Слот связан с ...'
              className={styles.textarea}
              {...register('desc')}
              error={errors.desc?.message}
            />
          </ChoiceBlock>

          <ChoiceBlock text='3. Предварительная цена ($)' error={errors.startPrice?.message}>
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
