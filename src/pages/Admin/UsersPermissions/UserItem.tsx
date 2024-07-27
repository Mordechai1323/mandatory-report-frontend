import styled from 'styled-components'

import { User } from './UsersTableBody'

interface UserItemProps {
  user: User
}

export const UserItem = ({ user }: UserItemProps) => {
  return (
    <UserItemStyle>
      <div className="item name">{user.name}</div>
      <div className="item user-name">{user.userName}</div>
      <div className="item classification">{user.classification}</div>
      <div className="item email">{user.email}</div>
      <div className="item display-name">{user.displayName}</div>
      <div className="item role"> {user.role}</div>
    </UserItemStyle>
  )
}

const UserItemStyle = styled.div`
  width: 100%;
  min-height: 3.75rem;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.375rem;
  overflow: hidden;
  margin: 0.5rem 0;
  overflow-wrap: anywhere;

  & .item {
    align-self: center;
  }
`
