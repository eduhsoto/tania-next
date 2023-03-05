import Footer from '@/components/Footer'
import NavBar from '@/components/navbar/NavBar'
import ProctedRoute from '@/components/ProctedRoute'
import { AuthProvider } from '@/context/authContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import type { ReactNode } from 'react'
import AddItem from './additem'
import Dashboard from './dashboard'
import EditItem from './edit/[id]'

const DefaultComponent = ({children} : { children: ReactNode }): React.ReactElement => <>{children}</>

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const Auth = Component === Dashboard || Component === AddItem || Component === EditItem
  const IsComponent = Auth ? ProctedRoute : DefaultComponent
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
        <IsComponent>
        <Component {...pageProps} />
        </IsComponent>
        <Footer />
      </AuthProvider>
    </>
  )
}
