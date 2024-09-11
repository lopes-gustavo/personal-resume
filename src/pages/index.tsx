import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import dynamic from 'next/dynamic';

import { Page } from '../components/Layout/Page';
import { About } from '../components/Sections/About';
import { Hero } from '../components/Sections/Hero';
import { Resume } from '../components/Sections/Resume';
import { Skills } from '../components/Sections/Skills';
import { homePageMeta } from '../data/data';

const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });
const Footer = dynamic(() => import('../components/Sections/Footer'));
const Contact = dynamic(() => import('../components/Sections/Contact'));

export default function Home() {
  const { title, description } = homePageMeta;

  return (
    <>
      <Page description={description} title={title}>
        <Header />
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Contact />
        <Footer />
      </Page>

      <Analytics />
      <SpeedInsights />
    </>
  );
}
