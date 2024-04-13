import styled from 'styled-components'

import addReportIcon from '../../assets/icons/plus.svg'

interface AddReportProps {
  openAddReportPopup: () => void
}

export const AddReport = ({ openAddReportPopup }: AddReportProps) => {
  return (
    <AddReportStyled onClick={openAddReportPopup}>
      <img src={addReportIcon} alt="add report" />
    </AddReportStyled>
  )
}

const AddReportStyled = styled.div`
  position: absolute;
  right: 0.9rem;
  bottom: 1.9rem;
  height: 4rem;
  width: 4rem;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
  }
`
