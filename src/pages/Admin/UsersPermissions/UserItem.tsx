import styled from 'styled-components'
import { Switch } from '@mui/material'

import { User } from './UsersTableBody'
import { updateItem } from '../../../api/api'
import { useMutationCustom } from '../../../hooks/useMutationCustom'

interface UserItemProps {
  user: User
}

export const UserItem = ({ user }: UserItemProps) => {
  const { mutate } = useMutationCustom({
    mutationFn: (updateUser: User) => updateItem('users', updateUser),
    queryKey: ['users'],
  })

  return (
    <UserItemStyle>
      <div className="item name">{user.name}</div>
      <div className="item user-name">{user.userName}</div>
      <div className="item classification">{user.classification}</div>
      <div className="item email">{user.email}</div>
      <div className="item display-name">{user.displayName}</div>
      <div className="item role">
        <Switch
          defaultChecked={!user.role}
          onChange={(_, checked) => mutate({ ...user, role: Number(!checked) })}
          sx={{
            '.MuiSwitch-track': {
              backgroundColor: '#dedede',
            },
          }}
        />
      </div>
    </UserItemStyle>
  )
}

const UserItemStyle = styled.div`
  width: 100%;
  min-height: 3.75rem;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  overflow-wrap: anywhere;

  & span {
    color: ${({ theme }) => theme.colors.white};
  }

  & .item {
    align-self: center;
  }

  & .name {
    width: 15%;
  }
  & .user-name {
    width: 10%;
  }
  & .classification {
    width: 10%;
  }
  & .email {
    width: 15%;
  }
  & .display-name {
    width: 40%;
  }
  & .role {
    width: 10%;
  }
`
