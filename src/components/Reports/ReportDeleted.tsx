import styled from 'styled-components'

import { Modal } from '../UI/Modal'
import { Report } from '../../models/report'
import errorIcon from '../../assets/icons/error.svg'

interface ReportDeletedProps {
  isOpen: boolean
  onClose: () => void
  report: Report
}

export const ReportDeleted = ({ isOpen, onClose, report }: ReportDeletedProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} style={{ width: '39vw', height: '42vh' }}>
      <ReportDeletedStyle>
        <IconContainer>
          <img src={errorIcon} alt="" />
        </IconContainer>
        <ReportNumber>{`דיווח מספר ${report.id}`}</ReportNumber>
        <ReportContent>"{report.content}"</ReportContent>

        <Deleted>נמחק מהמערכת</Deleted>
      </ReportDeletedStyle>
    </Modal>
  )
}

const ReportDeletedStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IconContainer = styled.div`
  height: 15%;

  & img {
    width: 100%;
    height: 100%;
  }
`
const ReportNumber = styled.span`
  margin-top: 5%;
  font-size: 1.7rem;
`
const ReportContent = styled.span`
  font-size: 1.7rem;
`
const Deleted = styled.h4`
  margin-top: 7%;
  color: ${({ theme }) => theme.colors.error};
  font-weight: 100;
  font-size: 1.7rem;
`
