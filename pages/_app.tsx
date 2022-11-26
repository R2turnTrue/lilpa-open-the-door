import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>릴파넴 문여세요ㅛㅛㅛㅛㅛ</title>

      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
    <Component {...pageProps} />

    <Script
        id='ganalytics'
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=G-BLD5PM9BKD`}
      />
      <Script
        id='ganalytics-initializer'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-BLD5PM9BKD');
            `
        }}
      />
  </>
}
