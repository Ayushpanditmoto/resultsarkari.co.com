import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {DefaultSeo} from 'next-seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styled from 'styled-components';
import NextNProgress from 'nextjs-progressbar';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Script id="my-script" src="https://www.googletagmanager.com/gtag/js?id=G-VHGYMG4ETC" strategy="lazyOnload"/>
    <Script id="my-script1" strategy="lazyOnload">
      {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-VHGYMG4ETC');`}
    </Script>
    {/* Ads Script */}

    <Script id='ads' src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5179840175661904" crossOrigin="anonymous"></Script>

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

