import { Typography } from '@/components';

import styles from './InfoText.module.css';

export const InfoText = () => {
  return (
    <>
      <Typography className={styles.title_primary} variant='title32_bold' tag='h2'>
        Как добавить товар на аукцион?
      </Typography>
      <div>
        <Typography className={styles.subtitle} variant='title32_bold' tag='h3'>
          1. Нажмите на кнопку <span className={styles.title_primary}>Добавить</span>
        </Typography>
        <p>Вас перебросит на страницу добавления товара на аукцион</p>
      </div>
      <div>
        <Typography className={styles.subtitle} variant='title32_bold' tag='h3'>
          2. Заполните все необходимые данные в поля
        </Typography>
        <p>Это позволит дать покупателю полную информацию о товаре </p>
      </div>
      <div>
        <Typography className={styles.subtitle} variant='title32_bold' tag='h3'>
          3. Нажмите на кнопку создать слот
        </Typography>
        <p>После создания слота он автоматически добавится ко всем слотам на продажу.</p>
      </div>
      <div>
        <Typography className={styles.subtitle} variant='title32_bold' tag='h3'>
          Помните:
        </Typography>
        <div className={styles.text}>
          <p>
            Вы сами можете выставлять время окончания аукциона и время последней ставки. Если время
            ставки истекло и никто не выставил цену, ваш товар переходит к последнему покупателю,
            который сделал ставку. Минимальную ставку вы так же выставляете, в противном случае она
            ставится в 1$.
          </p>
          <p>
            Также чем больше ваш слот находится в избранных других пользователь и чем чаще его
            покупают/посещают, тем больше рейтинг товара. Чем выше рейтинг товара, тем больше шансов
            попасть товару в случайный аукцион, где собрано много популярных аукционов.
          </p>
        </div>
      </div>
    </>
  );
};
