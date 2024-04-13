import moment from 'moment'
import React from 'react'
import 'moment/dist/locale/he'
import styled from 'styled-components'

import { useEvent } from '../../hooks/useEvent'
import { ChooseEventPopup } from './ChooseEventPopup'
import changeEventIcon from '../../assets/icons/changeEvent.svg'

export const Event = () => {
  const { event } = useEvent()
  const [isChooseEventPopupOpen, setIsChooseEventPopupOpen] = React.useState(false)
  const targetRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (targetRef.current && !targetRef.current.contains(event.target as Node)) {
        setIsChooseEventPopupOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  moment.locale('he')
  const date = moment(event?.createdAt)
  const formatInHebrew = date.format('MMMM YY')


  return (
    <EventStyle>
      <div className="center" ref={targetRef}>
        <EventDetails onClick={() => setIsChooseEventPopupOpen((prev) => !prev)}>
          {event ? <h2>{`${event.name} - ${formatInHebrew}`}</h2> : <h2>בחר אירוע</h2>}
          <img src={changeEventIcon} alt="change event" />
        </EventDetails>
        {isChooseEventPopupOpen && (
          <ChooseEventPopup closeChooseEventPopup={() => setIsChooseEventPopupOpen(false)} />
        )}
      </div>
    </EventStyle>
  )
}

const EventStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & > .center {
    width: 90%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 1rem;
  }
`
const EventDetails = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  & img {
    margin-right: 1rem;
    cursor: pointer;
  }
  & h2 {
    cursor: pointer;
  }
`
