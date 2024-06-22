import { Typography } from '@/components';

import styles from './InfoInput.module.css';
import { ComponentProps, ReactNode } from 'react';

interface InfoInputProps extends ComponentProps<'div'> {
  title: string;
  children: ReactNode;
  error?: string;
}

export const InfoInput = ({ title, children, error, className }: InfoInputProps) => {
  return (
    <div>
      <div className={styles.block}>
        <Typography className={styles.title} variant='paragraph20_regular'>
          {title}
        </Typography>
        <span className={styles.err}>{error}</span>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};
