import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>릴파넴 문여세요ㅛㅛㅛㅛㅛㅛ</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="추워.." />
      <meta name="google-site-verification" content="rPlE4tV6K9OqqWGs9ZeCgetXfsu-Wk595PZZf6p97RQ" />
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
