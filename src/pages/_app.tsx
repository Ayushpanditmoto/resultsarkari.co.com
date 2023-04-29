import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {DefaultSeo} from 'next-seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styled from 'styled-components';
import NextNProgress from 'nextjs-progressbar';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo 
      title="Next.js Blog"
      description="Next.js Blog"
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: 'https://nextjs-blog-psi.vercel.app/',
        site_name: 'Next.js Blog',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
      />
    {/* <GlobalStyles> */}
    <NextNProgress
    color="#29D"
    startPosition={0.3}
    stopDelayMs={10}
    height={3}
    showOnShallow={true}
    options={{ easing: 'ease', speed: 100 }}
    />
    <Header/>
    <Component {...pageProps} />
    {/* </GlobalStyles> */}
    <Footer/>
    <Analytics/>
    </>
  )
}

