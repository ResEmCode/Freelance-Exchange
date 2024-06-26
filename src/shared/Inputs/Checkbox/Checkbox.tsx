import { ComponentProps, forwardRef, ReactNode, useState } from 'react';
import styles from './Checkbox.module.css';
import clsx from 'clsx';

type CheckboxTextVariant = 'default';

interface CheckboxProps extends ComponentProps<'label'> {
  children?: ReactNode;
  variant?: CheckboxTextVariant;
}

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  ({ children, className, variant = 'default' }, ref) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <label
        className={clsx(styles.label, className)}
        ref={ref}
        role='checkbox'
        tabIndex={0}
        onKeyPress={(event) => {
          if (event.key === 'Enter') setIsChecked((prev) => !prev);
        }}
      >
        <input role="none" tabIndex={-1} type='checkbox' checked={isChecked} className={styles.input} />
        <span className={styles.checkbox} />
        <span className={clsx(styles.text, styles[variant])}>{children}</span>
      </label>
    );
  }
);
