import { Typography } from '@/components/Typography/Typography';
import { ComponentProps, ReactNode } from 'react';

import styles from './InfoBlock.module.css';
import clsx from 'clsx';

interface InfoBlockProps extends ComponentProps<"div">{
  children: ReactNode;
  title: string;
}

export const InfoBlock = ({ children, title, className }: InfoBlockProps) => {
  return (
    <div className={clsx(styles.block, className)}>
      <Typography tag='h2' variant='title40_regular' className={styles.title}>
        {title}
      </Typography>
      <Typography tag='p' variant='paragraph20_regular' className={styles.text}>
        {children}
      </Typography>
    </div>
  );
};
