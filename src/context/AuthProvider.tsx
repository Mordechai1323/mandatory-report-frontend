import React from 'react'

import { Auth } from '../types/auth'

type AuthContext = {
  auth: Auth | undefined
  setAuth: (auth: Auth) => void
  persist: boolean
  changePersist: (persist: boolean) => void
}

const AuthContext = React.createContext<AuthContext>({
  auth: undefined,
  setAuth: () => {},
  persist: true,
  changePersist: () => {},
})

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = React.useState<Auth>()
  const [persist, setPersist] = React.useState<boolean>(() => {
    const persistValue = localStorage.getItem('persist')
    return persistValue ? JSON.parse(persistValue) : false
  })

  const changePersist = (persist: boolean) => {
    setPersist(persist)
    localStorage.setItem('persist', JSON.stringify(persist))
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, changePersist }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
