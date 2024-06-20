import { Typography } from '@/components';

import styles from './InfoInput.module.css';

interface InfoInputProps {
  title: string;
  text?: string | undefined;
  children: any;
}

export const InfoInput = ({ title, children, text }: InfoInputProps) => {
  return (
    <div>
      <div className={styles.block}>
        <Typography className={styles.title} variant='paragraph20_regular'>
          {title}
        </Typography>
        <span className={styles.err}>{text}</span>
      </div>
      {children}
    </div>
  );
};


