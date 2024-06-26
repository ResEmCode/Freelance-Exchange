import { useState } from 'react';
import { Link } from 'react-router-dom';

import { LoginModal, SignInModal } from '@/components/Layouts/components';
import { Typography } from '@/components';

import styles from './Navbar.module.css';

import { Logo } from '@/assets/svg';

import Items from './date.json';

import clsx from 'clsx';

type ModalType = 'modalLogin' | 'modalSignUp';

export const Navbar = () => {
  const [open, setOpen] = useState({
    modalLogin: false,
    modalSignUp: false
  });

  const path = window.location.pathname;

  const handleModal = (modal: ModalType) => {
    setOpen((prev) => ({
      ...prev,
      [modal]: !prev[modal]
    }));
  };

  return (
    <div className={styles.wrapper}>
      {open.modalLogin && <LoginModal handleModal={handleModal} />}
      {open.modalSignUp && <SignInModal handleModal={handleModal} />}

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
                <li
                  key={item.title}
                  className={clsx(styles.item, path === item.path && styles.active)}
                >
                  <Link to={item.path}>
                    {' '}
                    <Typography variant='paragraph16_regular' tag='p'>
                      {item.title}
                    </Typography>
                  </Link>
                </li>
              ))}
              <li
                onClick={() => handleModal('modalSignUp')}
                className={styles.item}
                role='button'
                tabIndex={0}
                onKeyPress={(event) => {
                  if (event.key === 'Enter')
                    setOpen((prev) => ({ ...prev, modalSignUp: !open.modalSignUp }));
                }}
              >
                SignIn
              </li>
              <li
                onClick={() => handleModal('modalLogin')}
                className={styles.item}
                role='button'
                tabIndex={0}
                onKeyPress={(event) => {
                  if (event.key === 'Enter')
                    setOpen((prev) => ({ ...prev, modalLogin: !open.modalLogin }));
                }}
              >
                LogIn
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
