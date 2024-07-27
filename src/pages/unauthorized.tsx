import styled from 'styled-components'

import stopIcon from '../assets/icons/stop.svg'

export function Unauthorized() {
  return (
    <UnauthorizedStyle>
      <img src={stopIcon} alt="stop" />
      <h1>אין לך הרשאות מתאימות בכדי להכנס לאתר</h1>
    </UnauthorizedStyle>
  )
}

const UnauthorizedStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 31px;
    font-weight: 300;
    margin-top: 2rem;
  }
`
