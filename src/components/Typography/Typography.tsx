import clsx from 'clsx';

type TypographyVariant =
| 'paragraph16_regular'
  | 'paragraph20_regular'
  | 'title20_medium'
  | 'title24_regular'
  | 'title24_bold'
  | 'paragraph30_medium'
  | 'title32_bold'
  | 'title40_regular'
  | 'title96_regular'

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';

export type TypographyProps<Tag extends TypographyTag> = React.ComponentProps<Tag> & {
  children: React.ReactNode;
  tag?: TypographyTag;
  variant: TypographyVariant;
};

export const Typography = <Tag extends TypographyTag = 'div'>({
  variant,
  tag = 'div',
  children,
  className,
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag;

  return (
    <Component className={clsx(variant, className)} {...props}>
      {children}
    </Component>
  );
};
