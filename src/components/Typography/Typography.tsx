import clsx from 'clsx';

type TypographyVariant =
  | 'paragraph20_regular'
  | 'paragraph16_regular'
  | 'paragraph30_medium'
  | 'title96_regular'
  | 'title40_regular';

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
