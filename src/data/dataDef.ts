import { Dayjs } from 'dayjs';
import { FC, ForwardRefExoticComponent, ReactElement, SVGProps } from 'react';

import { IconProps } from '../components/Icon/Icon';

export interface HomepageMeta {
  title: string;
  description: string;
}

/**
 * Hero section
 */
export interface Hero {
  imageSrc: string;
  name: string;
  description: ReactElement;
  actions: HeroActionItem[];
}

interface HeroActionItem {
  href: string;
  text: string;
}

/**
 * About section
 */
export interface About {
  profileImageSrc?: string;
  description: string[];
  aboutItems: AboutItem[];
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

/**
 * Skills section
 */
export interface Skill {
  name: string;
  level: number;
  years: number;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

/**
 * Resume section
 */
export interface TimelineItemData {
  title: string;
  dateStart: Dayjs;
  dateEnd: Dayjs | null;
  location: string;
  url: string;

  content?: string[];
  skills?: string[];
}

/**
 * Contact section
 */
export interface ContactSection {
  headerText?: string;
  description: string;
  items: ContactItem[];
}

export const ContactType = {
  Email: 'Email',
  Phone: 'Phone',
} as const;

export type ContactType = (typeof ContactType)[keyof typeof ContactType];

export interface ContactItem {
  type: ContactType;
  text: string;
  href?: string;
}

export interface ContactValue {
  Icon: FC<IconProps> | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
  srLabel: string;
}

/**
 * Social items
 */
export interface Social {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}
