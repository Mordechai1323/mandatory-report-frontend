import styled from 'styled-components'

import addReportIcon from '../../assets/icons/plus.svg'

export const AddReport = () => {
  return (
    <AddReportStyled>
      <img src={addReportIcon} alt="add report" />
    </AddReportStyled>
  )
}

const AddReportStyled = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 3rem;
  height: 4rem;
  width: 4rem;

  & img {
    width: 100%;
    height: 100%;
  }
`
