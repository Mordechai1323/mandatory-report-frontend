import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Logo } from './Logo'
import { Navbar } from './Navbar'
import UserIcon from '../../assets/icons/user.svg'
import { AddReport } from '../../pages/Home/AddReport'
import { Event } from '../../components/Events/Event'

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

        <Event />

        <div className="left-container">
          <Navbar />
          <div className="user">
            <span>username</span>
            <img src={UserIcon} alt="user icon" />
          </div>
          <AddReport />
        </div>
      </div>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: center;
  
  & .header-center {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & .right-container {
      width: 33%;
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
      width: 33%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: end;

      & .user {
        display: flex;
        align-items: end;
        width: 23%;

        & img {
          margin-right: 0.5rem;
        }
      }
    }
  }
`
