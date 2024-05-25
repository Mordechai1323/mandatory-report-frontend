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
      <TopContainer>
        <SearchContainer>
          <Input
            input={{ placeholder: 'חיפוש' }}
            icon={searchIcon}
            style={{ marginTopInputContainer: '0' }}
          />
        </SearchContainer>
        <AddEventContainer>
          <Button button={{ onClick: () => setEventPopupType('createEvent') }}>
            + הוספת אירוע
          </Button>
        </AddEventContainer>
      </TopContainer>

      <AllEvents closeEventPopup={closeEventPopup} />
    </ChooseEventStyle>
  )
}

const ChooseEventStyle = styled.div`
  width: 80%;
  height: 90%;
`
const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8%;
`
const SearchContainer = styled.div`
  width: 70%;
`

const AddEventContainer = styled.div`
  width: 25%;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;

  & button {
    font-size: 1rem;
    font-weight: 100;
  }
`
