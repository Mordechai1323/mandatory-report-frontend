import styled from 'styled-components'
import { Link } from 'react-router-dom'

import lamdanLogo from '../../assets/lamdanLogo.svg'

export const LogoAndTitle = () => {
  return (
    <LogoAndTitleStyle>
      <LogoStyle>
        <img src={lamdanLogo} alt="lamdan logo" />
      </LogoStyle>
      <Link to="/">
        <h1>דיווחי חובה</h1>
      </Link>
    </LogoAndTitleStyle>
  )
}

const LogoAndTitleStyle = styled.div`
  width: 33%;
  height: 75%;
  display: flex;
  align-items: center;

  & a {
    display: flex;
    & h1 {
      font-weight: 200;
      font-size: 1.5rem;
      margin: 0 1rem;
    }
  }
`

const LogoStyle = styled.div`
  height: 100%;
  width: 11%;
  & img {
    width: 100%;
    height: 100%;
  }
`
