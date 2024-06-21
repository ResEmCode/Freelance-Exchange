import { ComponentProps, forwardRef, ReactNode } from 'react';

import styles from './Radio.module.css';
import clsx from 'clsx';

type RadioTextVariant = 'default';

interface RadioProps extends ComponentProps<'input'> {
  children?: ReactNode;
  variant?: RadioTextVariant;
  name: string;
}

export const Radio = forwardRef<HTMLLabelElement, RadioProps>(
  ({ children, className, name, variant = 'default', ...props }, ref) => {
    return (
      <label className={clsx(styles.label, className)} ref={ref}>
        <input name={name} type='radio' className={styles.input} {...props} />
        <span className={styles.radio} />
        <span className={clsx(styles.text, styles[variant])}>{children}</span>
      </label>
    );
  }
);
