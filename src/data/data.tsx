import {
  AcademicCapIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';
import dayjs, { Dayjs } from 'dayjs';

import ArcDevIcon from '../components/Icon/ArcDevIcon';
import DevReadyIcon from '../components/Icon/DevReadyIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import HimalayasIcon from '../components/Icon/HimalayasIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TuringIcon from '../components/Icon/TuringIcon';
import EsferaEnergia from '../images/companyLogos/EsferaEnergia.png';
import EstrategiaEducacional from '../images/companyLogos/EstrategiaEducacional.jpg';
import Gympass from '../images/companyLogos/Gympass.jpg';
import MaisIm from '../images/companyLogos/MaisIm.png';
import Nursa from '../images/companyLogos/Nursa.png';
import RedemptionGames from '../images/companyLogos/RedemptionGames.jpg';
import Santander from '../images/companyLogos/Santander.png';
import UFJF from '../images/companyLogos/UFJF.png';
import UniversityOfNottingham from '../images/companyLogos/UniversityOfNottingham.jpg';
import Wabtec from '../images/companyLogos/Wabtec.png';
import heroImage from '../images/header-background.webp';
import profilePic from '../images/profilepic.jpg';
import { About, ContactSection, ContactType, Hero, HomepageMeta, SkillGroup, Social, TimelineItem } from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Gustavo Lopes Resume',
  description: "Gustavo Lopes' personal resume written in React",
};

/**
 * Section definition
 */
export const SectionId = {
  Home: 'home',
  About: 'about',
  Resume: 'resume',
  Skills: 'skills',
  Contact: 'contact',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Gustavo Lopes`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A Brazilian <strong className="text-stone-100">Full Stack Software Engineer</strong>, passionate by technology,
        with over 8 years of professional experience (and an additional 7 as a hobbyist).
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Resume}`,
      text: 'Resume',
      primary: false,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
const birthday = dayjs('1994-04-20');
const age = dayjs().diff(birthday, 'years');
export const aboutData: About = {
  profileImageSrc: profilePic,
  description: [
    'Hello! Welcome to my resume!',
    `My name's Gustavo Lopes and I'm a Brazilian developer.`,
    `I've been working on technology for the past 8 years in different positions, like hands-on developer, tech lead and even management. 
    If you'd like to consider university and hobby projects, there it goes 15 years.`,
    `I'm more inclined to work on backend (mostly in Node, Go and Python), but I have my share years working with React, Angular and Vue as well.`,
    `I've been in different industries so far, like Gaming, Health Care, Education, Electrical Engineering and others.`,
    `I love learning new things and one of my strengths is that I can learn really fast.`,
    `Outside of work, you can catch me doing sports (currently, beach tennis and volleyball) or hanging out with my friends in the company of a good ale. 🍻`,
    `Nice to meet you!`,
  ],
  aboutItems: [
    { label: 'Working location', text: `Remote | Minas Gerais, Brazil`, Icon: MapIcon },
    { label: 'Age', text: `${age}`, Icon: CalendarIcon },
    { label: 'Nationality', text: 'Brazilian', Icon: FlagIcon },
    { label: 'Hobbies', text: 'Sports, Bars, Friends', Icon: SparklesIcon },
    { label: 'Study', text: 'Universidade Federal de Juiz de Fora', Icon: AcademicCapIcon },
    { label: 'Sports', text: 'Beach Tennis, Volleyball, Football', Icon: TrophyIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend development',
    skills: [
      { name: 'Node.js', level: 9, years: 7 },
      { name: 'Golang', level: 8, years: 2 },
      { name: 'Nest.js', level: 8, years: 2 },
      { name: 'Python', level: 7, years: 4 },
      { name: 'Java', level: 5, years: 1 },
      { name: 'Ruby', level: 4, years: 1 },
    ],
  },
  {
    name: 'Backend tools',
    skills: [
      { name: 'Terraform', level: 8, years: 5 },
      { name: 'Docker', level: 7, years: 5 },
      { name: 'Kubernetes', level: 5, years: 1 },
      { name: 'RabbitMQ', level: 5, years: 3 },
      { name: 'SNS/SQS', level: 5, years: 3 },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      { name: 'Typescript', level: 9, years: 6 },
      { name: 'Angular', level: 9, years: 5 },
      { name: 'Vue', level: 8, years: 2 },
      { name: 'React', level: 7, years: 2 },
      { name: 'Next.js', level: 7, years: 2 },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      { name: 'Ionic', level: 8, years: 2 },
      { name: 'Flutter', level: 6, years: 2 },
    ],
  },
  {
    name: 'Cloud Development',
    skills: [
      { name: 'AWS', level: 8, years: 5 },
      { name: 'Firebase', level: 8, years: 6 },
      { name: 'GCP', level: 7, years: 2 },
      { name: 'Azure', level: 5, years: 1 },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'Postgres', level: 8, years: 5 },
      { name: 'MySQL', level: 7, years: 2 },
      { name: 'Redis', level: 7, years: 4 },
      { name: 'DynamoDB', level: 5, years: 2 },
      { name: 'MongoDB', level: 5, years: 1 },
      { name: 'OracleDB', level: 4, years: 1 },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      { name: 'Github Actions', level: 8, years: 2 },
      { name: 'Azure DevOps', level: 7, years: 1 },
    ],
  },
  {
    name: 'Testing',
    skills: [
      { name: 'Cypress', level: 6, years: 3 },
      { name: 'Playwright', level: 5, years: 1 },
    ],
  },
];

const experienceDate = (month: number, year: number): Dayjs => dayjs(`${year}-${month}-01`);

export const experience: TimelineItem[] = [
  {
    title: 'Full Stack Software Engineer',
    dateStart: experienceDate(6, 2023),
    dateEnd: experienceDate(9, 2024),
    location: 'Redemption Games',
    url: RedemptionGames,
    content: [
      `Lead engineer on the backend side of the company's mobile app games`,
      `Sole engineer responsible for the internal company CMS tool, using React + Typescript`,
      `Responsible for multiple CI/CD pipelines in the company`,
    ],
    skills: ['Node.js', 'Typescript', 'Javascript', 'Firebase', 'GCP', 'Github Actions'],
  },
  {
    title: 'Lead Software Engineer / Engineering Manager',
    dateStart: experienceDate(4, 2022),
    dateEnd: experienceDate(6, 2023),
    location: 'Nursa',
    url: Nursa,
    content: [
      'Manager of 4 teams',
      'Migrated source code from Gitlab to Github, reducing costs by 30%',
      'Introduced GitHub Actions, improving CI/CD time by more than 50% (from 35 min to 15 min)',
      'Improved testing coverage from 20% to 85%',
      'Improved deployment cycle time from 1 week to 2 days by introducing trunk-based development with feature flags',
      'Responsible for running regressions, deployments and releases',
    ],
    skills: ['Angular', 'Node.js', 'Python', 'Nest.js', 'GCP', 'Engineering Management'],
  },
  {
    title: 'Fullstack Software Engineer / Tech Lead',
    dateStart: experienceDate(4, 2020),
    dateEnd: experienceDate(4, 2022),
    location: 'Estratégia Educacional',
    url: EstrategiaEducacional,
    content: [
      'Technical leader of 2 teams',
      'Created the authentication and authorization flow for more than 1 million users',
      'Refactored the whole e-commerce application (medium size, 6 months of work), with no downtime and with constant deliveries',
      'Responsible for implementing code review, QA analysis and agile metrics within the e-commerce team- Technical leader of 2 teams - Created the authentication and authorization flow for more than 1 million users - Refactored the whole e-commerce application (medium size, 6 months of work), with no downtime and with constant deliveries - Responsible for implementing code review, QA analysis and agile metrics within the e-commerce team',
      'Backend chapter lead - run weekly meetings with the whole dev team to discuss various aspects of the application and internal product',
    ],
    skills: ['Go', 'Vue.js', 'Flutter', 'AWS', 'Terraform'],
  },
  {
    title: 'Lead Software Engineer',
    dateStart: experienceDate(4, 2019),
    dateEnd: experienceDate(4, 2020),
    location: 'Esfera Energia',
    url: EsferaEnergia,
    content: [
      `Technical leader of the developers' team (7 people)`,
      'Introduced JIRA and scrum to better control of tasks planning and to generate reports for managers',
      'Automated repetitive, manual, daily processes of several coworkers, creating CLIs, RPAs, small applications, etc.',
      'Improved the application unreliable infrastructure with alarms and logs. Update the manually created infrastructure using Terraform',
      'Created internal web services (Angular + PWA, mostly) to replace several Excel worksheets used by the business teams',
    ],
    skills: ['Angular', 'React', 'Python', 'AWS', 'GraphQL', 'Flask'],
  },
  {
    title: 'Fullstack Software Engineer',
    dateStart: experienceDate(12, 2018),
    dateEnd: experienceDate(4, 2019),
    location: 'Gympass',
    url: Gympass,
    content: [
      'Responsible for migrating a legacy monolithic Ruby system to Scala microservices',
      'Developed a search microservice using ElasticSearch, Scala and React.js, along with Google Maps API and Kubernetes',
    ],
    skills: ['React.js', 'Angular', 'Scala', 'Ruby', 'Ruby on Rails', 'Elasticsearch', 'GraphQL'],
  },
  {
    title: 'Backend Software Engineer',
    dateStart: experienceDate(1, 2018),
    dateEnd: experienceDate(12, 2018),
    location: 'Santander Bank',
    url: Santander,
    content: [
      'Responsible for developing the second-factor security module of Santander Bank, delivering APIs for all the main channels, with more than 40 million requests a day. Used NodeJS, Typescript, Oracle DB, Docker, Mocha',
      'Responsible for raising demands and drawing technical solutions',
      'Improved the project’s structure, using better software design patterns',
    ],
    skills: ['Node.js', 'Azure', 'Jenkins'],
  },
  {
    title: 'Fullstack Software Engineer',
    dateStart: experienceDate(5, 2017),
    dateEnd: experienceDate(1, 2018),
    location: 'Mais.im',
    url: MaisIm,
    content: [
      'Responsible for the system front end, using jQuery, SASS and HTML5. Used Electron/PhoneGap for desktop and mobile applications',
      'Improved application response time by structuring Amazon Services (Elastic Load Balance, CDN) and instantiating proper cache',
      'Enhanced deployment speed and security by creating automated scripts',
      `Improved company's overall communication by implementing Github issues and code versioning`,
    ],
    skills: ['Node.js', 'jQuery', 'PhoneGap', 'Electron.js'],
  },
  {
    title: 'Software Engineer - Intern',
    dateStart: experienceDate(9, 2016),
    dateEnd: experienceDate(5, 2017),
    location: 'Wabtec Passenger Transit',
    url: Wabtec,
    content: [`Helped analysing application's error logs and trying to find where the issue could be`],
    skills: ['C#', '.NET'],
  },
];

export const education: TimelineItem[] = [
  {
    title: 'Electronic Engineering',
    dateStart: experienceDate(2, 2012),
    dateEnd: experienceDate(11, 2017),
    location: 'Universidade Federal de Juiz de Fora',
    url: UFJF,
  },
  {
    title: 'Electronic Engineering',
    dateStart: experienceDate(9, 2014),
    dateEnd: experienceDate(9, 2015),
    location: 'University of Nottingham',
    url: UniversityOfNottingham,
  },
];

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'If you want to get in touch, please use the previous form or contact me by email.',
  items: [
    {
      type: ContactType.Email,
      text: 'lopes.gustavojf@gmail.com',
      href: 'mailto:lopes.gustavojf@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Minas Gerais, Brazil',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/gustavomlopes/' },
  { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8038345/gustavo-lopes' },
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/lopes-gustavo' },
  {
    label: 'Turing',
    Icon: TuringIcon,
    href: 'https://matching.turing.com/developer-resume/1b8d51d4d21fdfbb3deb46b9654a0b1b5812af68937b46',
  },
  { label: 'Arc.dev', Icon: ArcDevIcon, href: 'https://arc.dev/@lopesgustavo' },
  { label: 'DevReady', Icon: DevReadyIcon, href: 'https://profile.devready.io/developers/gustavo-moraes-l' },
  { label: 'Himalayas', Icon: HimalayasIcon, href: 'https://himalayas.app/@gustavolopes' },
];
