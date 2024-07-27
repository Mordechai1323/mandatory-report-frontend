import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { User } from './User'
import { AddReport } from '../../pages/Home/AddReport'
import graphsIcon from '../../assets/icons/graphs.svg'
import { useNotifications } from '../../hooks/useNotifications'
import notifications from '../../assets/icons/notifications.svg'
import notificationsMuted from '../../assets/icons/notificationsMuted.svg'

export const Actions = () => {
  const { toggleMuteNotifications, isMuted } = useNotifications()
  return (
    <ActionsStyle>
      <img
        onClick={toggleMuteNotifications}
        src={isMuted ? notificationsMuted : notifications}
        alt={'notifications on'}
        className='notifications'
      />

      <Link to={'/graphs'}>
        <img src={graphsIcon} alt={'graphs'} />
      </Link>

      <User />
      <AddReport />
    </ActionsStyle>
  )
}

const ActionsStyle = styled.div`
  width: 33%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: end;

  a {
    margin-left: 1rem;
    display: flex;
  }

  & .notifications {
    cursor: pointer;
    margin-left: 1rem;
    height: 23px;
  }
`
