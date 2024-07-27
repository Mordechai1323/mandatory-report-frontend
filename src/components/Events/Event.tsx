import moment from 'moment'
import React from 'react'
import 'moment/dist/locale/he'
import styled from 'styled-components'

import { EventPopup } from './EventPopup'
import { useEvent } from '../../hooks/useEvent'
import changeEventIcon from '../../assets/icons/changeEvent.svg'

export const Event = () => {
  const { event } = useEvent()
  const [isEventPopupOpen, setIsEventPopupOpen] = React.useState(false)

  moment.locale('he')
  const date = moment(event?.createdAt)
  const formatInHebrew = date.format('MMMM YY')

  return (
    <EventStyle>
      <EventDetails onClick={() => setIsEventPopupOpen(true)}>
        {event ? <h2>{`${event.name} - ${formatInHebrew}`}</h2> : <h2>בחר אירוע</h2>}
        <img src={changeEventIcon} alt="change event" />
      </EventDetails>
      <EventPopup
        closeEventPopup={() => setIsEventPopupOpen(false)}
        isEventPopupOpen={isEventPopupOpen}
      />
    </EventStyle>
  )
}

const EventStyle = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const EventDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    margin-right: 1rem;
    cursor: pointer;
  }
  & h2 {
    cursor: pointer;
    font-size: 1.4rem;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.halfScreen}) {
    & img {
      margin-right: 0.5rem;
    }
    & h2 {
      font-size: 1rem;
    }
  }
`
