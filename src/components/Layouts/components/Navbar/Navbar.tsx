import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Input, Modal, Button } from '@/shared';
import Items from './date.json';
import { Logo } from '@/assets/svg';
import { Typography } from '@/components/Typography/Typography';
import close from '../../../../../public/images/Modal/close.png';
import { useState } from 'react';

type ModalType = 'modal1' | 'modal2';

export const Navbar = () => {
  const [open, setOpen] = useState({
    modal1: false,
    modal2: false
  });

  const handleModal = (modal: ModalType) => {
    setOpen((prev) => ({
      ...prev,
      [modal]: !prev[modal]
    }));
  };

  return (
    <div className={styles.wrapper}>
      {open.modal1 && (
        <Modal onClick={() => handleModal('modal1')}>
          <h3 className={styles.title}>Регистрация</h3>
          <form className={styles.form} action=''>
            <Input variant='primary' type='email' placeholder='Почта' />
            <Input variant='primary' type='text' placeholder='Логин' />
            <Input variant='primary' type='password' placeholder='Пароль' />
          </form>
          <img onClick={() => handleModal('modal1')} src={close} alt='' className={styles.img} />
          <Button className={styles.btn} variant='conteined'>
            Продолжить
          </Button>
        </Modal>
      )}
      {open.modal2 && (
        <Modal onClick={() => handleModal('modal2')}>
          <h3 className={styles.title}>Авторизация</h3>
          <form className={styles.form} action=''>
            <Input variant='primary' type='text' placeholder='Логин' />
            <Input variant='primary' type='password' placeholder='Пароль' />
          </form>
          <img onClick={() => handleModal('modal2')} src={close} alt='' className={styles.img} />
          <Button className={styles.btn} variant='conteined'>
            Продолжить
          </Button>
        </Modal>
      )}

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
                  <a href='#!'>
                    <Typography variant='paragraph16_regular' tag='p'>
                      {item.title}
                    </Typography>
                  </a>
                </li>
              ))}
              <li onClick={() => handleModal('modal1')} className={styles.item}>
                SignIn
              </li>
              <li onClick={() => handleModal('modal2')} className={styles.item}>
                LogIn
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
