import React from 'react'
import { Outlet } from 'react-router-dom'

import axios from '../api/axios'
import { Auth } from '../types/auth'
import { useAuth } from '../hooks/useAuth'
import { Loading } from '../pages/Loading'

export function PersistLogin() {
  const [isLoading, setIsLoading] = React.useState(true)
  const { auth, setAuth, persist } = useAuth()

  React.useEffect(() => {
    let isMounted = true

    const veriFyToken = async () => {
      try {
        const response = await axios.get<Auth>('/veriFyToken', {
          withCredentials: true,
        })
        setAuth(response.data)
      } catch (err) {
        console.error(err)
      } finally {
        isMounted && setIsLoading(false)
      }
    }

    !auth ? veriFyToken() : setIsLoading(false)

    return () => {
      isMounted = false
    }
  }, [])

  return <>{!persist ? <Outlet /> : isLoading ? <Loading /> : <Outlet />}</>
}
