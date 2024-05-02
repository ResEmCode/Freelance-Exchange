import React from 'react';
import styles from './Header.module.css';
import background from '../../../public/images/Header/HeaderBackground.png';
import clsx from 'clsx';

const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={background} alt='' className={styles.img} />
        <div className='container'>
          <div className={styles.inner}>
            <p className={styles.text}>Фриланс биржа с системой аукционов </p>
            <div className={styles.block}>
              <input className={styles.input} type='text' placeholder='Поиск...' />
              <button className={styles.btn}>Найти</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
