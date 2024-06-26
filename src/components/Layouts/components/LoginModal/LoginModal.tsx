import { Button, Input, Modal } from '@/shared';
import styles from '../Navbar/Navbar.module.css';
import CloseImg from '../../../../../public/images/Modal/close.png';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, loginSchema } from '../../constans/LoginSchema';
import { useEffect } from 'react';

type modalType = 'modalSignUp' | 'modalLogin';

interface LoginModalProps {
  handleModal: (state: modalType) => void;
}

export const LoginModal = ({ handleModal }: LoginModalProps) => {
  const {
    register,
    setFocus,
    formState: { errors }
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur'
  });

  useEffect(() => {
    setFocus('login');
  }, []);

  return (
    <Modal onClick={() => handleModal('modalLogin')} className={styles.modal}>
      <div className={styles.top}>
        <h3 className={styles.title}>Авторизация</h3>
        <img
          onClick={() => handleModal('modalLogin')}
          src={CloseImg}
          alt='close'
          className={styles.img}
          tabIndex={1}
          role='button'
          onKeyPress={(event) => {
            if (event.key === 'Enter') handleModal('modalLogin');
          }}
        />
      </div>
      <form className={styles.form}>
        <Input
          error={errors.login?.message}
          className={styles.input}
          variant='primary'
          type='text'
          placeholder='Логин'
          {...register('login')}
        />
        <Input
          error={errors.password?.message}
          className={styles.input}
          variant='primary'
          type='password'
          placeholder='Пароль'
          {...register('password')}
        />
        {}
        <Button className={styles.btn} variant='conteined'>
          Продолжить
        </Button>
      </form>
    </Modal>
  );
};

