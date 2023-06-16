import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';

import ArcDevIcon from '../components/Icon/ArcDevIcon';
import DevReadyIcon from '../components/Icon/DevReadyIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TuringIcon from'../components/Icon/TuringIcon';
import {calculateAge} from '../helper/date';
import heroImage from'../images/header-background.webp';
import profilePic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Gustavo Lopes Resume',
  description: "Gustavo Lopes's personal resume written in React",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Gustavo Lopes.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Brazilian <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training <strong className="text-stone-100">beach tennis</strong>,
        drinking some <strong className="text-stone-100">beer</strong>, or simply laying down on the beautiful beaches
        of <strong className="text-stone-100">Rio de Janeiro</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false
    },
  ],
};

/**
 * About section
 */
const birthday = new Date('1994-04-20');
const age = calculateAge(birthday);
export const aboutData: About = {
  profileImageSrc: profilePic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Working location', text: `Remote | Minas Gerais, Brazil`, Icon: MapIcon},
    {label: 'Age', text: `${age}`, Icon: CalendarIcon},
    {label: 'Nationality', text: 'Brazilian', Icon: FlagIcon},
    {label: 'Hobbies', text: 'Sports, Bars, Friends', Icon: SparklesIcon},
    {label: 'Study', text: 'Universidade Federal de Juiz de Fora', Icon: AcademicCapIcon},
    {label: 'Sports', text: 'Beach Tennis, Volleyball, Football', Icon: TrophyIcon}
  ]
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
        years: 7,
      },
      {
        name: 'Golang',
        level: 8,
        years: 2,
      },
      {
        name: 'Nest.js',
        level: 8,
        years: 2,
      },
      {
        name: 'Python',
        level: 7,
        years: 4,
      },
      {
        name: 'Java',
        level: 5,
        years: 1,
      },
      {
        name: 'Ruby',
        level: 4,
        years: 1,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Angular',
        level: 9,
        years: 5,
      },
      {
        name: 'Vue',
        level: 8,
        years: 2,
      },
      {
        name: 'React',
        level: 7,
        years: 2,
      },
      {
        name: 'Next.js',
        level: 7,
        years: 2,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Ionic',
        level: 8,
        years: 2,
      },
      {
        name: 'Flutter',
        level: 6,
        years: 2,
      },
    ],
  },
  {
    name: 'Cloud Development',
    skills: [
      {
        name: 'AWS',
        level: 9,
        years: 5,
      },
      {
        name: 'Firebase',
        level: 8,
        years: 6,
      },
      {
        name: 'GCP',
        level: 8,
        years: 2,
      },
      {
        name: 'Azure',
        level: 5,
        years: 1,
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'Postgres',
        level: 8,
        years: 5,
      },
      {
        name: 'MySQL',
        level: 7,
        years: 2,
      },
      {
        name: 'Redis',
        level: 7,
        years: 4,
      },
      {
        name: 'DynamoDB',
        level: 5,
        years: 2
      },
      {
        name: 'MongoDB',
        level: 5,
        years: 1,
      },
      {
        name: 'OracleDB',
        level: 4,
        years: 1,
      },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Github Actions',
        level: 8,
        years: 2,
      },
      {
        name: 'Azure DevOps',
        level: 7,
        years: 1,
      },
      {
        name: 'Terraform',
        level: 7,
        years: 5,
      },
      {
        name: 'Docker',
        level: 7,
        years: 5,
      },
      {
        name: 'Kubernetes',
        level: 5,
        years: 1,
      },
    ],
  },
  {
    name: 'Testing',
    skills: [
      {
        name: 'Cypress',
        level: 6,
        years: 3,
      },
      {
        name: 'Playwright',
        level: 5,
        years: 1,
      },
    ],
  },
];

export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'lopes.gustavojf@gmail.com',
      href: 'mailto:lopes.gustavojf@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/gustavomlopes/'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8038345/gustavo-lopes'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/lopes-gustavo'},
  {label: 'Turing', Icon: TuringIcon, href: 'https://matching.turing.com/developer-resume/1b8d51d4d21fdfbb3deb46b9654a0b1b5812af68937b46'},
  {label: 'Arc.dev', Icon: ArcDevIcon, href: 'https://arc.dev/@lopesgustavo'},
  {label: 'DevReady', Icon: DevReadyIcon, href: 'https://profile.devready.io/developers/gustavo-moraes-l'},
];
