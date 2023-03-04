import Footer from '@/components/Footer'
import NavBar from '@/components/navbar/NavBar'
import { AuthProvider } from '@/context/authContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <link rel='icon' type='image/x-icon' href='img/ico.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='author' content='Tania' />
        <meta name='copyright' content='Tania' />
      </Head>
      <AuthProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </>
  )
}
