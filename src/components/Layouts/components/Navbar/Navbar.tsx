import { Link } from 'react-router-dom';
import logo from '../../../../../public/images/Navbar/logo.png';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <Link to='/'>
              <img src={logo} alt='' className={styles.logo} />
            </Link>
            <p className={styles.text}>ResEmCode</p>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.items}>
              <a href=''>
                <li className={styles.item}>Аукцион</li>
              </a>
              <a href=''>
                <li className={styles.item}>Биржа</li>
              </a>
              <a href=''>
                <li className={styles.item}>LogIn</li>
              </a>
              <a href=''>
                <li className={styles.item}>SigIn</li>
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
