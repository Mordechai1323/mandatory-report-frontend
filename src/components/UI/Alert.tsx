import styled from 'styled-components'

import { Modal } from './Modal'
import { Button } from './Button'
import errorIcon from '../../assets/icons/error.svg'
import { useAlert } from '../../context/AlertProvider'

export const Alert = () => {
  const { alert, confirmAlert, cancelAlert } = useAlert()

  return (
    <Modal
      isOpen={alert.isVisible}
      onClose={cancelAlert}
      key={alert.message}
      style={{ width: '39vw', height: '42vh' }}
    >
      <AlertStyle>
        <IconContainer>
          <img src={errorIcon} style={{ width: '3.5rem' }} alt={'error'} />
        </IconContainer>
        <AlertMessage>{alert.message}</AlertMessage>
        <BottomContainer>
          <CancelButton>
            <Button button={{ onClick: cancelAlert }}>
              <div className="cancel">
                <span>{'<'}</span>
                <span>ביטול</span>
              </div>
            </Button>
          </CancelButton>
          <ConfirmButton>
            <Button button={{ onClick: confirmAlert }}>אישור</Button>
          </ConfirmButton>
        </BottomContainer>
      </AlertStyle>
    </Modal>
  )
}

const AlertStyle = styled.div`
  width: 100%;
  height: 98%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
const IconContainer = styled.div`
  height: 15%;
  margin-top: 5%;

  & img {
    width: 100%;
    height: 100%;
  }
`
const AlertMessage = styled.span`
  font-size: 1.2rem;
  text-align: center;
  width: 90%;
`
const BottomContainer = styled.div`
  margin-top: 10%;
  width: 90%;
  height: 8%;
  display: flex;
  justify-content: space-between;

  & .cancel {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
  }
`
const CancelButton = styled.div`
  color: ${({ theme }) => theme.colors.error};
  display: flex;
  align-items: center;
  font-size: 1.6rem;

  & span {
    color: ${({ theme }) => theme.colors.error};
    margin-right: 0.5rem;
  }
`
const ConfirmButton = styled.div`
  width: 15%;
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
`
