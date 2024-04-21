import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { PAGES } from '../../constants/pages'

export const Navbar = () => {
  return (
    <NavbarStyle>
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
  margin-left: 0.5rem;
  a {
    margin: 0 0.5rem;
  }
`
