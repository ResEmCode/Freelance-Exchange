import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Input, Modal, Button } from '@/shared';
import { Typography } from '@/components';

import styles from './Navbar.module.css';

import close from '../../../../../public/images/Modal/close.png';
import { Logo } from '@/assets/svg';

import Items from './date.json';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchema } from '../../constans/LoginSchema';

type ModalType = 'modalLogin' | 'modalSignUp';

export const Navbar = () => {
  const [open, setOpen] = useState({
    modalLogin: false,
    modalSignUp: false
  });

  const {
    register,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  });

  const handleModal = (modal: ModalType) => {
    setOpen((prev) => ({
      ...prev,
      [modal]: !prev[modal]
    }));
  };

  return (
    <div className={styles.wrapper}>
      {open.modalLogin && (
        <Modal onClick={() => handleModal('modalLogin')} className={styles.modal}>
          <div className={styles.top}>
            <h3 className={styles.title}>Регистрация</h3>
            <img
              onClick={() => handleModal('modalLogin')}
              src={close}
              alt=''
              className={styles.img}
            />
          </div>
          <form className={styles.form} action=''>
            <Input className={styles.input} variant='primary' type='email' placeholder='Почта' {...register("email")}/>
            <Input className={styles.input} variant='primary' type='text' placeholder='Логин' {...register("login")}/>
            <Input
              className={styles.input}
              variant='primary'
              type='password'
              placeholder='Пароль'{...register("password")}
            />
          </form>

          <Button className={styles.btn} variant='conteined'>
            Продолжить
          </Button>
        </Modal>
      )}
      {open.modalSignUp && (
        <Modal onClick={() => handleModal('modalSignUp')} className={styles.modal}>
          <div className={styles.top}>
            <h3 className={styles.title}>Авторизация</h3>
            <img
              onClick={() => handleModal('modalSignUp')}
              src={close}
              alt=''
              className={styles.img}
            />
          </div>

          <form className={styles.form}>
            <Input className={styles.input} variant='primary' type='text' placeholder='Логин' />
            <Input
              className={styles.input}
              variant='primary'
              type='password'
              placeholder='Пароль'
            />
          </form>

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
                  <Link to={item.path}>
                    {' '}
                    <Typography variant='paragraph16_regular' tag='p'>
                      {item.title}
                    </Typography>
                  </Link>
                </li>
              ))}
              <li onClick={() => handleModal('modalLogin')} className={styles.item}>
                SignIn
              </li>
              <li onClick={() => handleModal('modalSignUp')} className={styles.item}>
                LogIn
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
