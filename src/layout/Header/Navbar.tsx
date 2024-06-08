import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { PAGES } from '../../constants/pages'
import notifications from '../../assets/icons/notifications.svg'
import notificationsMuted from '../../assets/icons/notificationsMuted.svg'
import { useNotifications } from '../../hooks/useNotifications'

export const Navbar = () => {
  const { toggleMuteNotifications, isMuted } = useNotifications()
  return (
    <NavbarStyle>
      <img
        onClick={toggleMuteNotifications}
        src={isMuted ? notificationsMuted : notifications}
        alt={'notifications on'}
      />

      {PAGES.map((page) => {
        if (page.isDisplayNavbar) {
          return (
            <Link key={page.path} to={page.path}>
              <img src={page.icon} alt={page.name} />
            </Link>
          )
        }
      })}
    </NavbarStyle>
  )
}

const NavbarStyle = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 0.5rem;
  a {
    margin: 0 0.5rem;
    display: flex;
  }

  & img {
    cursor: pointer;
    margin: 0 0.5rem;
    max-height: 23px;
  }
`
