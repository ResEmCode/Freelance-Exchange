import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

import Items from './date.json';
import { Logo } from '@/assets/svg';
import { Typography } from '@/components/Typography/Typography';

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.inner}>
          <div className={styles.block}>
            <Link to='/' className={styles.logo}>
              <Logo size={25} className={styles.icon} />
              <Typography variant='title24_regular' tag='p'>
                ResEmCode
              </Typography>
            </Link>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.items}>
              {Items.map((item) => (
                <li key={item.title} className={styles.item}>
                  <Link to={item.path}>
                    <Typography variant='paragraph16_regular' tag='p'>
                      {item.title}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
