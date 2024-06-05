import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'
import { Loading } from '../pages/Loading'
import { login } from '../utils/login'

interface RequireAuthProps {
  allowedRoles: number
}

export function RequireAuth({ allowedRoles }: RequireAuthProps) {
  const { auth, setAuth, changePersist } = useAuth()
  const [isTryToLogin, setIisTryToLogin] = React.useState(auth == undefined)
  const location = useLocation()

  React.useEffect(() => {
    const loginHandler = async () => {
      try {
        const userDetails = await login()
        setAuth(userDetails)
        changePersist(true)
      } catch (err) {
        console.error(err)
        // DELETE THIS LINE AFTER IMPLEMENTING ADFS
        setAuth({name: 'test', role: 0, uniqueID: 'test-uniqueID'})
      } finally {
        setIisTryToLogin(false)
      }
    }
    if (isTryToLogin) loginHandler()
  }, [])

  if (isTryToLogin) return <Loading />
  if (auth && auth.role <= allowedRoles) return <Outlet />
  return <Navigate to="/unauthorized" state={{ from: location }} replace />
}
