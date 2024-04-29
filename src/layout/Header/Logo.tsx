import styled from 'styled-components'

import lamdanLogo from '../../assets/lamdanLogo.svg'

export const Logo = () => {
  return (
    <LogoStyle>
      <img src={lamdanLogo} alt="lamdan logo" />
    </LogoStyle>
  )
}

const LogoStyle = styled.div`
  height: 100%;
  width: 11%;
  & img {
    width: 100%;
    height: 100%;
  }
`
