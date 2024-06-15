import clsx from 'clsx';
import { ComponentProps, forwardRef } from 'react';
import styles from './Textarea.module.css';

type TextareaVariant = 'auction';

interface TextareaProps extends ComponentProps<'textarea'> {
  variant: TextareaVariant;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant, className, error, ...props }, ref) => {
    return (
      <textarea
        className={clsx(styles.textarea, styles[variant], className, error && styles.error)}
        ref={ref}
        {...props}
      />
    );
  }
);
