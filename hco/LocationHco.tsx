import { type ComponentType, useState, useEffect } from 'react'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/Footer'

const withRender = (Component: ComponentType<any>): ComponentType<any> => {
  const WrapedComponent = (): JSX.Element => {
    const [pathname, setPathname] = useState('')

    useEffect(() => {
      setPathname(window.location.pathname)
    }, [])

    const id = pathname.split('/edit/')[1]
    const pathnameExclude = ['/login', '/dashboard', '/additem', `/edit/${id}`]
    return <>{!pathnameExclude.includes(pathname) && <Component />}</>
  }

  return WrapedComponent
}

export const NavBarwithRender = withRender(NavBar)
export const FooterwithRender = withRender(Footer)
