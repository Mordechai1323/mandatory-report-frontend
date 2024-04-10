import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Layout } from './layout/Layout'
import { PAGES } from './constants/pages'
import { Themes } from './types/general'
import { PageNotFound } from './pages/PageNotFound'
import { GlobalStyles } from './styles/GlobalStyles'
import { darkTheme, lightTheme } from './styles/theme'

function App() {
  const [theme, setTheme] = useState<Themes>('light')

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          {PAGES.map((page) => (
            <Route key={page.path} path={page.path} element={<page.component />} />
          ))}

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
