import React from 'react'
import styled from 'styled-components'
import { ChooseEvent } from './ChooseEvent'
import { CreateEvent } from './CreateEvent'

interface EventPopupProps {
  closeEventPopup: () => void
}

export type EventPopupType = 'chooseEvent' | 'createEvent'

export const EventPopup = ({ closeEventPopup }: EventPopupProps) => {
  const [eventPopupType, setEventPopupType] = React.useState<EventPopupType>('chooseEvent')

  return (
    <EventPopupStyle>
      {eventPopupType === 'chooseEvent' ? (
        <ChooseEvent closeEventPopup={closeEventPopup} setEventPopupType={setEventPopupType} />
      ) : (
        <CreateEvent closeEventPopup={closeEventPopup} setEventPopupType={setEventPopupType} />
      )}
    </EventPopupStyle>
  )
}

const EventPopupStyle = styled.div`
  width: 41rem;
  height: 30rem;
  background: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 4rem;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`
