import styled from 'styled-components'

import successIcon from '../../assets/icons/success.svg'
import errorIcon from '../../assets/icons/error.svg'

interface AlertProps {
  message: string
  type: 'success' | 'error'
}

export const Alert = ({ message, type }: AlertProps) => {
  return (
    <AlertStyle>
      <div className="center-container">
        <div className="image-container">
          <img
            src={type === 'success' ? successIcon : errorIcon}
            style={{ width: type === 'error' ? '3.5rem' : '' }}
            alt={type}
          />
        </div>
        <div className="message-container">{message}</div>
      </div>
    </AlertStyle>
  )
}

const AlertStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .center-container {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .message-container {
      font-size: 1.5rem;
      margin-top: 1rem;
    }
  }
`
