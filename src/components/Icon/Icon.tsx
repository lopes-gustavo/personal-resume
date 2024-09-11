import { PropsWithChildren, SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement>;

export const Icon = ({ children, ...props }: PropsWithChildren<IconProps>) => (
  <svg fill="currentColor" viewBox="0 0 128 128" width="128" xmlns="http://www.w3.org/2000/svg" {...props}>
    {children}
  </svg>
);
