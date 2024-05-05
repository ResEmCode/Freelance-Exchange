import date from '../../date.json';

import styles from './InfoCards.module.css';

const { CardItems } = date;

export const InfoCards = () => {
  return (
    <ul className={styles.items}>
      {CardItems.map((item) => (
        <li className={styles.item} key={item.title}>
          <a href='#!' className={styles.link}>
            <img className={styles.img} src={item.img} alt='card techno' />
            <span className={styles.text}>{item.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
