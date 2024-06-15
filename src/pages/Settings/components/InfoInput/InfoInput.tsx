import { Typography } from '@/components';

import styles from './InfoInput.module.css';
import { FC } from 'react';

interface InfoInputProps {
  title: string;
  children: any;
}

const InfoInput: FC<InfoInputProps> = ({ title, children }) => {
  return (
    <div>
      <Typography className={styles.title} variant='paragraph20_regular'>
        {title}
      </Typography>
      {children}
    </div>
  );
};

export default InfoInput;
