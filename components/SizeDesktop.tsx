import { H1S } from '@/styles/styled-components/dashboard/Dashboard'
import { type ReactNode, useEffect, useState } from 'react'

const JustDesktop = ({
  children,
}: {
  children: ReactNode
}): React.ReactElement => {

  const [isDesktop, setDesktop] = useState(false)

  useEffect(() => {
    const handleSize = () : void => {
      if(window.innerWidth <= 912){
        setDesktop(true)
      }
    }
    window.addEventListener('resize', handleSize)
    handleSize()
    return () => { window.removeEventListener('resize', handleSize); };
  }, [])

  if(isDesktop) return <H1S>Para una mejor visualización de los datos, use una laptop o computadora</H1S>

  return <>{children}</>
}

export default JustDesktop
