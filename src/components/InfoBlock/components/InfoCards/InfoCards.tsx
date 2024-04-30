import Card1 from '@/assets/images/InfoBlock/card-1.jpg';
import Card2 from '@/assets/images/InfoBlock/card-2.jpg';
import Card3 from '@/assets/images/InfoBlock/card-3.jpg';
import Card4 from '@/assets/images/InfoBlock/card-4.jpg';
import Card5 from '@/assets/images/InfoBlock/card-5.jpg';
import Card6 from '@/assets/images/InfoBlock/card-6.jpg';
import Card7 from '@/assets/images/InfoBlock/card-7.jpg';
import Card8 from '@/assets/images/InfoBlock/card-8.jpg';

import styles from './InfoCards.module.css';

const CardItems: Array<{ title: string; img: string }> = [
  {
    title: 'Дизайн',
    img: Card1
  },
  {
    title: 'IT сфера',
    img: Card2
  },
  {
    title: 'Social Media',
    img: Card3
  },
  {
    title: 'SEO & Optimization',
    img: Card4
  },
  {
    title: 'Training',
    img: Card5
  },
  {
    title: 'Music',
    img: Card6
  },
  {
    title: 'Translate',
    img: Card7
  },
  {
    title: 'Analytics',
    img: Card8
  }
];

export const InfoCards = () => {
  return (
    <ul className={styles.items}>
      {CardItems.map((item) => (
        <li className={styles.item} key={item.title}>
          <img className={styles.img} src={item.img} alt='card techno' />
          <span className={styles.text}>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};
