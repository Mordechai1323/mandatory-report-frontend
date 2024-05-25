import moment from 'moment'
import React from 'react'
import 'moment/dist/locale/he'
import styled from 'styled-components'

import { useEvent } from '../../hooks/useEvent'
import changeEventIcon from '../../assets/icons/changeEvent.svg'
import { EventPopup } from './EventPopup'

export const Event = () => {
  const { event } = useEvent()
  const [isEventPopupOpen, setIsEventPopupOpen] = React.useState(false)
  const targetRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (targetRef.current && !targetRef.current.contains(event.target as Node)) {
        setIsEventPopupOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  moment.locale('he')
  const date = moment(event?.createdAt)
  const formatInHebrew = date.format('MMMM YY')

  return (
    <EventStyle ref={targetRef}>
      <EventDetails onClick={() => setIsEventPopupOpen((prev) => !prev)}>
        {event ? <h2>{`${event.name} - ${formatInHebrew}`}</h2> : <h2>בחר אירוע</h2>}
        <img src={changeEventIcon} alt="change event" />
      </EventDetails>
      {isEventPopupOpen && <EventPopup closeEventPopup={() => setIsEventPopupOpen(false)} />}
    </EventStyle>
  )
}

const EventStyle = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const EventDetails = styled.div`
  display: flex;
  justify-content: center;

  & img {
    margin-right: 1rem;
    cursor: pointer;
  }
  & h2 {
    cursor: pointer;
    font-size: 1.4rem;
  }
`
