import { ComponentProps, ReactNode } from 'react';
import styles from './Tag.module.css';
import clsx from 'clsx';

type TagVariants = 'error' | 'success' | 'pedding';
interface TagProps extends ComponentProps<'div'> {
  children: ReactNode;
  variant: TagVariants;
}
export const Tag = ({ children, className, variant }: TagProps) => {
  return <div className={clsx(styles.tag, styles[variant], className)}>{children}</div>;
};
