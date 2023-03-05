import { useAuth, type AuthContextModel } from '@/context/authContext'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import Spinner from './Spinner'

const ProctedRoute = ({
  children,
}: {
  children: ReactNode
}): React.ReactElement => {
  const { user, isLoading } = useAuth() as AuthContextModel
  const { replace } = useRouter()

  if (isLoading) return <Spinner />

  if (user === null) void replace('/login')

  return <>{children}</>
}

export default ProctedRoute
