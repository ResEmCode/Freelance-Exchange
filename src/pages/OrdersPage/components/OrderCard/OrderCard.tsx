import { Typography } from '@/components';
import styles from './OrderCard.module.css';
import { Button, Tag } from '@/shared';

interface OrderCardProps {
  title: string;
  authorName: string;
  date: string;
  price: number;
  status: number;
}

export const OrderCard = ({ title, authorName, date, price, status }: OrderCardProps) => {
  return (
    <li className={styles.card}>
      <Typography tag='p' variant='title20_medium'>
        {title}
      </Typography>
      <Typography tag='p' variant='paragraph16_regular'>
        {authorName}
      </Typography>
      <Typography tag='p' variant='paragraph16_regular'>
        {date}
      </Typography>
      <Typography tag='p' variant='paragraph16_regular'>
        {price}$
      </Typography>
      <div className={styles.btns}>
        {status === 0 && (
          <Tag variant='error' className={styles.tag}>
            Отменен
          </Tag>
        )}
        {status === 1 && (
          <Tag variant='pedding' className={styles.tag}>
            В процессе
          </Tag>
        )}
        {status === 2 && (
          <Tag variant='success' className={styles.tag}>
            Выполнено
          </Tag>
        )}
        <Button className={styles.btn} variant='offer'>
          Читать отзыв
        </Button>
      </div>
    </li>
  );
};
