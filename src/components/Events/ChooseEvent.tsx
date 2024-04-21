import styled from 'styled-components'

import { Input } from '../UI/Input'
import { Button } from '../UI/Button'
import { AllEvents } from './AllEvents'
import { EventPopupType } from './EventPopup'
import searchIcon from '../../assets/icons/search.svg'

interface ChooseEventProps {
  closeEventPopup: () => void
  setEventPopupType: React.Dispatch<React.SetStateAction<EventPopupType>>
}

export const ChooseEvent = ({ closeEventPopup, setEventPopupType }: ChooseEventProps) => {
  return (
    <ChooseEventStyle>
      <div className="top">
        <div className="right-container">
          <Input input={{ placeholder: 'חיפוש' }} icon={searchIcon} />
        </div>
        <div className="left-container">
          <Button button={{ onClick: () => setEventPopupType('createEvent') }}>
            + הוספת אירוע
          </Button>
        </div>
      </div>

      <AllEvents closeEventPopup={closeEventPopup} />
    </ChooseEventStyle>
  )
}

const ChooseEventStyle = styled.div`
  width: 80%;
  height: 90%;

  & .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 2.5rem;

    & .right-container {
      width: 70%;
    }

    & .left-container {
      width: 20%;
      background: ${({ theme }) => theme.colors.secondary};
      border-radius: 6px;
    }
  }
`
