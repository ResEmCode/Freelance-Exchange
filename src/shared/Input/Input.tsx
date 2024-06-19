import clsx from 'clsx';
import { ComponentProps, forwardRef } from 'react';
import styles from './Input.module.css';

type InputVariant = 'primary' | 'second' | 'auction' | 'third' | 'search';

interface InputProps extends ComponentProps<'input'> {
  variant: InputVariant;
  error?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, variant, className, error, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        placeholder={placeholder}
        {...props}
        className={clsx(styles.input, styles[variant], className, error && styles.error)}
      />
    );
  }
);
