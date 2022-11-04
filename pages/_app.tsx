import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>릴파넴 문여세요ㅛㅛㅛㅛㅛ</title>
    </Head>
    <Component {...pageProps} />
  </>
}
