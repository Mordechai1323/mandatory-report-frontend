import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { PAGES } from '../../constants/pages'
import notifications from '../../assets/icons/notifications.svg'
import { useNotifications } from '../../hooks/useNotifications'

export const Navbar = () => {
  const { toggleMuteNotifications } = useNotifications()
  return (
    <NavbarStyle>
      <img onClick={toggleMuteNotifications} src={notifications} alt={'notifications on'} />

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
  align-items: end;
  height: 100%;
  margin-left: 0.5rem;
  a {
    margin: 0 0.5rem;
  }

  & img {
    cursor: pointer;
  }
`
