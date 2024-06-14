import { SVGProps } from 'react';
import clsx from 'clsx';

export const SvgIcon = ({ width, height, size, viewBox, children, className }: SvgIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={
        viewBox || `0 0 ${width ? width : size ? size : 24} ${height ? height : size ? size : 24}`
      }
      width={size || width || 24}
      height={size || height || 24}
      className={clsx(className)}
    >
      {children}
    </svg>
  );
};

export interface SvgIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}
