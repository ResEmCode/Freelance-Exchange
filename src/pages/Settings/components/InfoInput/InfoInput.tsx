import { Typography } from '@/components';

import styles from './InfoInput.module.css';
import { FC } from 'react';

interface InfoInputProps {
  title: string;
  text?: string | undefined;
  children: any;
}

const InfoInput: FC<InfoInputProps> = ({ title, children, text }) => {
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

export default InfoInput;
