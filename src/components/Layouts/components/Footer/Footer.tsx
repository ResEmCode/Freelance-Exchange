import styles from './Footer.module.css';
import date from './date.json';
import { Typography } from '@/components/Typography/Typography';
import { Logo } from '@/assets/svg';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div>
            <a className={styles.logo} href=''>
              <Logo size={25} className={styles.icon}/>
              <Typography variant='title24_regular' tag='h2'>
                ResEmCode
              </Typography>
            </a>
          </div>
          {date.map((item) => (
            <ul key={item.title} className={styles.items}>
              <li className={styles.item}>
                <a href=''>
                  <Typography variant='paragraph16_regular' tag='p'>
                    {item.title}
                  </Typography>
                </a>
              </li>
              <li className={styles.item}>
                <a href=''>
                  <Typography variant='paragraph16_regular' tag='p'>
                    {item.name}
                  </Typography>
                </a>
              </li>
              <li className={styles.item}>
                <a href=''>
                  <Typography variant='paragraph16_regular' tag='p'>
                    {item.text}
                  </Typography>
                </a>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
