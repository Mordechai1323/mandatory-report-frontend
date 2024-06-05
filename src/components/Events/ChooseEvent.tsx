import React from 'react'
import styled from 'styled-components'

import { Input } from '../UI/Input'
import { Button } from '../UI/Button'
import { AllEvents } from './AllEvents'
import { Roles } from '../../types/auth'
import { EventPopupType } from './EventPopup'
import { useAuth } from '../../hooks/useAuth'
import searchIcon from '../../assets/icons/search.svg'

interface ChooseEventProps {
  closeEventPopup: () => void
  setEventPopupType: React.Dispatch<React.SetStateAction<EventPopupType>>
}

export const ChooseEvent = ({ closeEventPopup, setEventPopupType }: ChooseEventProps) => {
  const [searchEvent, setSearchEvent] = React.useState('')
  const { auth } = useAuth()

  const isAdmin = auth?.role === Roles.Admin

  return (
    <ChooseEventStyle>
      <TopContainer>
        <SearchContainer $isAdmin={isAdmin}>
          <Input
            input={{
              placeholder: 'חיפוש',
              onChange: (e) => setSearchEvent(e.target.value),
              autoFocus: true,
            }}
            icon={searchIcon}
            style={{ marginTopInputContainer: '0', widthContainer: '100%' }}
          />
        </SearchContainer>
        {isAdmin && (
          <AddEventContainer>
            <Button button={{ onClick: () => setEventPopupType('createEvent') }}>
              + הוספת אירוע
            </Button>
          </AddEventContainer>
        )}
      </TopContainer>

      <AllEvents closeEventPopup={closeEventPopup} searchEvent={searchEvent} />
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
const SearchContainer = styled.div<{ $isAdmin: boolean }>`
  width: ${({ $isAdmin }) => ($isAdmin ? '70%' : '100%')};
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
