import React from 'react'
import styled from 'styled-components'
import { PAGES } from '../../constants/pages'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <NavbarStyle>
      {PAGES.map((page) => {
        if (page.isDisplayNavbar) {
          return (
            <Link key={page.path} to={page.path}>
              {page.name}
            </Link>
          )
        }
      })}
    </NavbarStyle>
  )
}

const NavbarStyle = styled.div`
  display: flex;
  width: 80%;
  align-items: end;
  a {
    margin: 0 0.5rem;
  }
`
