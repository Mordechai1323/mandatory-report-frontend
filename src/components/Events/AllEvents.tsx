import React from 'react'
import styled from 'styled-components'

import { socket } from '../../socket'
import { Event } from '../../models/event'
import { useEvent } from '../../hooks/useEvent'
import { useAllEvents } from '../../hooks/useAllEvents'
import { EventType, eventsTypes } from '../../constants/events'

interface AllEventsProps {
  closeEventPopup: () => void
}

interface ChooseEventTypeProps {
  setEventType: React.Dispatch<React.SetStateAction<EventType>>
  eventType: EventType
}

interface EventsProps {
  allEvents: Event[] | undefined
  eventType: EventType
  closeEventPopup: () => void
}

export const AllEvents = ({ closeEventPopup }: AllEventsProps) => {
  const { allEvents } = useAllEvents()
  const [eventType, setEventType] = React.useState<EventType>('חירום')

  return (
    <AllEventsStyle>
      <ChooseEventType eventType={eventType} setEventType={setEventType} />
      <Events allEvents={allEvents} eventType={eventType} closeEventPopup={closeEventPopup} />
    </AllEventsStyle>
  )
}

const ChooseEventType = ({ setEventType, eventType }: ChooseEventTypeProps) => {
  return (
    <ChooseEventTypeStyle>
      {eventsTypes.map((type) => {
        const isCurrent = eventType === type
        return (
          <EventTypeContainer
            $isCurrent={isCurrent}
            key={type}
            onClick={() => setEventType(type)}
          >
            {type}
          </EventTypeContainer>
        )
      })}
    </ChooseEventTypeStyle>
  )
}

const Events = ({ allEvents, eventType, closeEventPopup }: EventsProps) => {
  const { event, changeEvent } = useEvent()
  const filteredData = React.useMemo(
    () => allEvents?.filter((ele) => (eventType === 'תרגיל' ? ele.isTraining : !ele.isTraining)),
    [eventType, allEvents]
  )

  const changeEventHandler = (newEvent: Event) => {
    if (event) socket.emit('leaveRoom', event.id)
    changeEvent(newEvent)
    closeEventPopup()
  }

  return (
    <EventsContainer>
      {filteredData?.map((event) => (
        <EventItem key={event.id} onClick={() => changeEventHandler(event)}>
          {event.name}
        </EventItem>
      ))}
    </EventsContainer>
  )
}

const AllEventsStyle = styled.div`
  width: 100%;
  height: 88%;
  overflow: auto;
  direction: ltr;
  padding-right: 2rem;
  margin-top: 2rem;
`
const ChooseEventTypeStyle = styled.div`
  display: flex;
  width: 100%;
  direction: rtl;
`
const EventTypeContainer = styled.div<{ $isCurrent: boolean }>`
  width: 50%;
  text-align: center;
  border-bottom: 1px solid
    ${({ theme, $isCurrent }) => ($isCurrent ? theme.colors.primary : theme.colors.border)};
  padding-bottom: 0.6rem;
  cursor: pointer;
`
const EventsContainer = styled.div`
  width: 100%;
  direction: rtl;
`
const EventItem = styled.div`
  text-align: start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.2rem 0 1rem 0;
  cursor: pointer;
`
