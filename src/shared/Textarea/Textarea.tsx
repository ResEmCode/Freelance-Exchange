import { ComponentProps, forwardRef } from 'react';
import styles from './Textarea.module.css';
import clsx from 'clsx';

type TextareaVariant = 'primary';

interface TextareaProps extends ComponentProps<'textarea'> {
  variant: TextareaVariant;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ placeholder, className, variant, ...props }, ref) => {
    return (
      <textarea
        placeholder={placeholder}
        className={clsx(styles.textarea, styles[variant], className)}
        ref={ref}
        {...props}
      ></textarea>
    );
  }
);
