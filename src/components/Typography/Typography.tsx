import clsx from 'clsx';

type TypographyVariant =
| 'paragraph16_regular'
  | 'paragraph20_regular'
  | 'paragraph30_medium'
  | 'title24_regular'
  | 'title24_bold'
  | 'title96_regular'
  | 'title40_regular'
  | 'title32_bold';

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
