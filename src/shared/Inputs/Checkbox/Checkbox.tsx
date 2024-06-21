import { ComponentProps, forwardRef, ReactNode } from 'react';
import styles from './Checkbox.module.css';
import clsx from 'clsx';

type CheckboxTextVariant = 'default';

interface CheckboxProps extends ComponentProps<'label'> {
  children?: ReactNode;
  variant?: CheckboxTextVariant;
}

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  ({ children, className, variant = 'default' }, ref) => {
    return (
      <label className={clsx(styles.label, className)} ref={ref}>
        <input type='checkbox' className={styles.input} />
        <span className={styles.checkbox} />
        <span className={clsx(styles.text, styles[variant])}>{children}</span>
      </label>
    );
  }
);
