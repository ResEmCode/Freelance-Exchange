import styles from './Footer.module.css';
import Items from './date.json';
import logo from '../../../../../public/images/Footer/logo.svg';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div>
            <a className={styles.logo} href=''>
              <img className={styles.img} src={logo} alt='logo' />
              <p>ResEmCode</p>
            </a>
          </div>
          {Items.map((item) => (
            <ul className={styles.items}>
              <li className={styles.item}>
                <a href=''>{item.title}</a>
              </li>
              <li className={styles.item}>
                <a href=''>{item.name}</a>
              </li>
              <li className={styles.item}>
                <a href=''>{item.text}</a>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
