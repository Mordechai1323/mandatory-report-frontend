import styled from 'styled-components'

import { Actions } from './Actions'
import { LogoAndTitle } from './LogoAndTitle'
import { Event } from '../../components/Events/Event'
import { CenterContainer } from '../../components/UI/CenterContainer'

export const Header = () => {
  return (
    <HeaderStyle>
      <CenterContainer
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <LogoAndTitle />
        <Event />
        <Actions />
      </CenterContainer>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 20px 0px #0000000d;
  background-color: ${({ theme }) => theme.colors.white};

  & .left-container {
    width: 33%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: end;
  }
`
