import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Logo } from './Logo'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <HeaderStyle>
      <div className="right-container">
        <Link to="/">
          <h1>דיווחי חובה</h1>
        </Link>
        <Navbar />
      </div>
      <div className="left-container">
        <Logo />
      </div>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
  width: 100%;
  height: 8vh;
  padding: 1rem;
  display: flex;
  align-items: end;
  justify-content: space-between;

  & .right-container {
    display: flex;
    width: 50%;
    justify-content: space-between;

    & h1 {
      font-weight: 200;
    }
  }

  & .left-container {
    display: flex;
    align-items: start;
    height: 100%;
  }
`
