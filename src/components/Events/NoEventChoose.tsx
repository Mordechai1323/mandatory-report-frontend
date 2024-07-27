import styled from 'styled-components'

import arrowUp from '../../assets/icons/arrowUp.svg'

export const NoEventChoose = () => {
  return (
    <NoEventChooseStyle>
      <img src={arrowUp} alt="arrow up" />
      <span>יש לבחור אירוע בכדי לצפות בדיווחים</span>
    </NoEventChooseStyle>
  )
}

const NoEventChooseStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  & span {
    margin-top: 3rem;
    font-size: 32px;
    font-weight: 300;
  }
`
