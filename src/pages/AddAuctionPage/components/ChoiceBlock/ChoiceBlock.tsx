import { Typography } from '@/components';
import styles from './ChoiceBlock.module.css';
import { ComponentProps, ReactNode } from 'react';

type ChoiceBlockTag = 'div' | 'li';

type ChoiceBlockProps<Tag extends ChoiceBlockTag> = ComponentProps<Tag> & {
  children: ReactNode;
  text: string;
  tag?: ChoiceBlockTag;
  error?: string;
};

export const ChoiceBlock = <Tag extends ChoiceBlockTag = 'li'>({
  children,
  text,
  error,
  tag = 'li'
}: ChoiceBlockProps<Tag>) => {
  const Component = tag;
  return (
    <Component>
      <div className={styles.text_block}>
        <Typography tag='h2' variant='title24_bold' className={styles.subtitle}>
          {text}
        </Typography>
        {error ? <span className={styles.error}>{error}</span> : null}
      </div>
      {children}
    </Component>
  );
};
