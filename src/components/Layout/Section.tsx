import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import { SectionId } from '../../data/data';

type SectionProps = PropsWithChildren<{
  sectionId: SectionId;
  noPadding?: boolean;
  className?: string;
}>;

export const Section = ({ children, sectionId, noPadding = false, className }: SectionProps) => (
  <section className={classNames(className, { 'px-4 py-16 md:py-24 lg:px-8': !noPadding })} id={sectionId}>
    <div className={classNames({ 'mx-auto max-w-screen-lg': !noPadding })}>{children}</div>
  </section>
);
