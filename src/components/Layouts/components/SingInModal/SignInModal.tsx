import { Button, Input, Modal } from '@/shared';
import styles from '../Navbar/Navbar.module.css';
import CloseImg from '../../../../../public/images/Modal/close.png';
import { useForm } from 'react-hook-form';
import { signInSchema, SignInSchema } from '../../constans/SignInScheme';
import { zodResolver } from '@hookform/resolvers/zod';

type modalType = 'modalSignUp' | 'modalLogin';
interface SignInModalProps {
  handleModal: (state: modalType) => void;
}
export const SignInModal = ({ handleModal }: SignInModalProps) => {
  const {
    register,
    formState: { errors }
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    mode: 'onBlur'
  });

  return (
    <Modal onClick={() => handleModal('modalSignUp')} className={styles.modal}>
      <div className={styles.top}>
        <h3 className={styles.title}>Регистрация</h3>
        <img
          onClick={() => handleModal('modalSignUp')}
          src={CloseImg}
          alt='close'
          className={styles.img}
        />
      </div>

      <form className={styles.form}>
        <Input
          error={errors.email?.message}
          className={styles.input}
          variant='primary'
          type='email'
          placeholder='Почта'
          {...register('email')}
        />
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

        <Button className={styles.btn} variant='conteined'>
          Продолжить
        </Button>
      </form>
    </Modal>
  );
};
