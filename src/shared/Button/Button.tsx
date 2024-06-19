import clsx from 'clsx';
import styles from './Button.module.css';
import { ComponentProps, ReactNode, forwardRef } from 'react';

type ButtonVariant = 'conteined' | 'offer' | 'filter';

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  variant: ButtonVariant;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, loading, ...props }, ref) => {
    return (
      <button className={clsx(styles.btn, styles[variant], className)} {...props} ref={ref}>
        {loading ? <>Loading...</> : <>{children}</>}
      </button>
    );
  }
);
