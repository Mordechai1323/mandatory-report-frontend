import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { Roles } from './types/auth'
import { Layout } from './layout/Layout'
import { PAGES } from './constants/pages'
import { useEvent } from './hooks/useEvent'
import { Alert } from './components/UI/Alert'
import { MuiRTL } from './components/UI/MuiRTL'
import { Unauthorized } from './pages/unauthorized'
import { PageNotFound } from './pages/PageNotFound'
import { GlobalStyles } from './styles/GlobalStyles'
import { RequireAuth } from './components/requireAuth'
import { PersistLogin } from './components/PersistLogin'
import { emergencyTheme, trainingTheme } from './styles/theme'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  const { event } = useEvent()

  return (
    <MuiRTL>
      <ThemeProvider theme={event?.isTraining ? trainingTheme : emergencyTheme}>
        <GlobalStyles />
        <ToastContainer />
        <Alert />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={Roles.User} />}>
              <Route path="/" element={<Layout />}>
                {PAGES.map((page) => (
                  <Route key={page.path} path={page.path} element={<page.component />} />
                ))}
              </Route>
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </MuiRTL>
  )
}

export default App
