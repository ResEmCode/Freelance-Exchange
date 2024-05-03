import { Link } from 'react-router-dom';
import logo from '../../../../../public/images/Navbar/logo.svg';
import styles from './Navbar.module.css';

import Items from './date.json';

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.block}>
          <Link to='/'>
            <img src={logo} alt='' className={styles.logo} />
          </Link>
          <p className={styles.text}>ResEmCode</p>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.items}>
            {Items.map((item) => (
              <li key={item.title} className={styles.item}>
                <a href='#!'>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
