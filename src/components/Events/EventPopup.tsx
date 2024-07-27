import React from 'react'
import styled from 'styled-components'
import { ChooseEvent } from './ChooseEvent'
import { CreateEvent } from './CreateEvent'
import { Modal } from '../UI/Modal'

interface EventPopupProps {
  closeEventPopup: () => void
  isEventPopupOpen: boolean

}

export type EventPopupType = 'chooseEvent' | 'createEvent'

export const EventPopup = ({ closeEventPopup, isEventPopupOpen }: EventPopupProps) => {
  const [eventPopupType, setEventPopupType] = React.useState<EventPopupType>('chooseEvent')

  return (
    <Modal onClose={closeEventPopup} isOpen={isEventPopupOpen}>
      <EventPopupStyle>
        {eventPopupType === 'chooseEvent' ? (
          <ChooseEvent closeEventPopup={closeEventPopup} setEventPopupType={setEventPopupType} />
        ) : (
          <CreateEvent closeEventPopup={closeEventPopup} setEventPopupType={setEventPopupType} />
        )}
      </EventPopupStyle>
    </Modal>
  )
}

const EventPopupStyle = styled.div`
  width: 41rem;
  height: 33.8rem;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`
