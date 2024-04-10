import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'

export const Layout = () => {
  return (
    <LayoutStyle>
      <Header />
      <ContentStyle>
        <Outlet />
      </ContentStyle>
      <Footer />
    </LayoutStyle>
  )
}

const LayoutStyle = styled.div`
  height: 100vh;
  width: 100vw;
`

const ContentStyle = styled.div`
  overflow-y: auto;
  height: 88vh;
`
