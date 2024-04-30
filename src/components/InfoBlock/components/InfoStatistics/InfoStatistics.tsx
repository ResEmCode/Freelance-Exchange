import styles from './InfoStatistics.module.css';
import Logo from '@/assets/images/logo.svg';

const statistics = [
  {
    title: 'ResEmCode',
    logo: Logo,
    desc: 'Фриланс платформа №1'
  },
  {
    title: '380 123',
    desc: 'Актуальный онлайн'
  },
  {
    title: '2 195',
    desc: 'Новых заказов за неделю'
  },
  {
    title: '912 033',
    desc: 'Выполнено проектовза все время'
  }
];

export const InfoStatistics = () => {
  return (
    <ul className={styles.items}>
      {statistics.map((item) => {
        return (
          <li className={styles.item}>
            <h2 className={styles.title}>
              {item.logo && <img className={styles.logo} src={item.logo} alt='logo' />}
              {item.title}
            </h2>
            <span className={styles.desc}>{item.desc}</span>
          </li>
        );
      })}
    </ul>
  );
};
