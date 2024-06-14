import { Typography } from '@/components';
import styles from './ChoiceBlock.module.css';
import { ComponentProps, ReactNode } from 'react';

type ChoiceBlockTag = 'div' | 'li';

type ChoiceBlockProps<Tag extends ChoiceBlockTag> = ComponentProps<Tag> & {
  children: ReactNode;
  text: string;
  tag?: ChoiceBlockTag;
}

export const ChoiceBlock = <Tag extends ChoiceBlockTag = 'li'>({
  children,
  text,
  tag = 'li'
}: ChoiceBlockProps<Tag>) => {
  const Component = tag;
  return (
    <Component>
      <Typography tag='h2' variant='title24_bold' className={styles.subtitle}>
        {text}
      </Typography>
      {children}
    </Component>
  );
};
