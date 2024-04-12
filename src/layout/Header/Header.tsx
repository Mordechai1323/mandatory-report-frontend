import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Logo } from './Logo'
import { Navbar } from './Navbar'
import UserIcon from '../../assets/icons/user.svg'

export const Header = () => {
  return (
    <HeaderStyle>
      <div className="header-center">
        <div className="right-container">
          <Link to="/">
            <Logo />
            <h1>דיווחי חובה</h1>
          </Link>
        </div>
        <div className="left-container">
          <Navbar />
          <div className="user">
            <span>username</span>
            <img src={UserIcon} alt="user icon" />
          </div>
        </div>
      </div>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
  width: 100%;
  height: 8vh;
  padding: 1rem;
  display: flex;
  justify-content: center;

  & .header-center {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: end;
    justify-content: space-between;
    & .right-container {
      width: 50%;
      justify-content: space-between;

      & a {
        display: flex;
        & h1 {
          font-weight: 200;
          font-size: 1.5rem;
          margin: 0 1rem;
        }
      }
    }

    & .left-container {
      display: flex;
      align-items: end;
      height: 100%;

      & .user {
        display: flex;
        align-items: center;
        & img {
          margin-right: 0.5rem;
        }
      }
    }
  }
`
