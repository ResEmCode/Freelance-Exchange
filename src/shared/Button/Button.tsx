import { ComponentProps, ReactNode, forwardRef } from 'react';

import clsx from 'clsx';
import styles from './Button.module.css';

type ButtonVariant = 'conteined' | 'offer' | 'filter' | "outline";

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
