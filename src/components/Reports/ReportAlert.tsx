import React from 'react'
import styled from 'styled-components'

import { Modal } from '../UI/Modal'
import errorIcon from '../../assets/icons/error.svg'
import successIcon from '../../assets/icons/success.svg'
import { Notification } from '../../context/NotificationsProvider'

interface ReportAlertProps {
  isOpen: boolean
  onClose: () => void
  notification: Notification
  duration?: number
}

export const ReportAlert = ({
  isOpen,
  onClose,
  notification,
  duration = 5000,
}: ReportAlertProps) => {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 100 / (duration / 20))
      }, 20)

      const timeout = setTimeout(() => {
        onClose()
        clearInterval(interval)
      }, duration)

      return () => {
        clearTimeout(timeout)
        clearInterval(interval)
      }
    }
  }, [duration, isOpen, onClose])

  return (
    <Modal isOpen={isOpen} onClose={onClose} style={{ width: '39vw', height: '42vh' }}>
      <ReportAlertStyle>
        <IconContainer>
          <img src={notification.type === 'newReport' ? successIcon : errorIcon} alt="" />
        </IconContainer>
        {notification.type === 'newReport' && <New>דיווח חדש</New>}
        <ReportNumber>{`דיווח מספר ${notification.report.id}`}</ReportNumber>
        <ReportContent>"{notification.report.content}"</ReportContent>
        {notification.type === 'deleteReport' && <Deleted>נמחק מהמערכת</Deleted>}
      </ReportAlertStyle>
      <ProgressContainer>
        <Progress $progress={progress} $isDeleteReport={notification.type === 'deleteReport'} />
      </ProgressContainer>
    </Modal>
  )
}

const ReportAlertStyle = styled.div`
  width: 100%;
  height: 98%;
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
  margin-top: 2%;
  font-size: 1.2rem;
`
const ReportContent = styled.span`
  font-size: 1.2rem;
  text-align: center;
  width: 90%;
`
const New = styled.h4`
  margin-top: 3%;
  color: ${({ theme }) => theme.colors.success};
  font-weight: 100;
  font-size: 1.2rem;
`
const Deleted = styled.h4`
  margin-top: 7%;
  color: ${({ theme }) => theme.colors.error};
  font-weight: 100;
  font-size: 1.2rem;
`

const ProgressContainer = styled.div`
  width: 100%;
  height: 2%;
  direction: ltr;
`

const Progress = styled.div<{ $progress: number; $isDeleteReport: boolean }>`
  width: ${({ $progress }) => $progress}%;
  height: 100%;
  background-color: ${({ theme, $isDeleteReport }) =>
    $isDeleteReport ? theme.colors.error : theme.colors.success};
`
