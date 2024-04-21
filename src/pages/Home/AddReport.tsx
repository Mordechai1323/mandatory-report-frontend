import styled from 'styled-components'

import { useAddReport } from '../../hooks/useAddReport'
import { Button } from '../../components/UI/Button'

export const AddReport = () => {
  const { openAddReportPopup } = useAddReport()

  return (
    <AddReportStyled onClick={openAddReportPopup}>
      <Button>+ הוספת דיווח</Button>
    </AddReportStyled>
  )
}

const AddReportStyled = styled.div`
  width: 9rem;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
  }
`
