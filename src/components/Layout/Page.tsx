import Head from 'next/head';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

import { HomepageMeta } from '../../data/dataDef';

export const Page = ({ children, title, description }: PropsWithChildren<HomepageMeta>) => {
  const { asPath: pathname } = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link href={`https://www.gustavo-lopes.me${pathname}`} key="canonical" rel="canonical" />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />

        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link color="#209CEE" href="/safari-pinned-tab.svg" rel="mask-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Theme color */}
        <meta content="#209CEE" name="theme-color" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={`https://gustavo-lopes.me${pathname}`} property="og:url" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
      </Head>

      {children}
    </>
  );
};
