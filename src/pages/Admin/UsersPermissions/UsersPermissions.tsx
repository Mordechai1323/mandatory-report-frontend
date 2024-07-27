import React from 'react'
import styled from 'styled-components'

import { UserForm } from './UserForm'
import { UsersTableBody } from './UsersTableBody'
import { UsersTableHeader } from './UsersTableHeader'
import { CenterContainer } from '../../../components/UI/CenterContainer'

export const UsersPermissions = () => {
  const [isAddUserOpen, setIsAddUserOpen] = React.useState(false)
  return (
    <UsersPermissionsStyle>
      <CenterContainer>
        <TopStyle>
          <h1>רשימת משתמשים</h1>
          <button onClick={() => setIsAddUserOpen(true)}>+ הוספה</button>
        </TopStyle>
        <TableStyle>
          <UsersTableHeader />
          <UsersTableBody />
        </TableStyle>
      </CenterContainer>
      {isAddUserOpen && (
        <UserForm
          isOpen={isAddUserOpen}
          handleClose={() => setIsAddUserOpen(false)}
          title="הוספת משתמש"
        />
      )}
    </UsersPermissionsStyle>
  )
}

const UsersPermissionsStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4vh;
`

const TopStyle = styled.div`
  display: flex;
  justify-content: space-between;
  & h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    font-size: 20px;
  }
  & button {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
  }
`

const TableStyle = styled.div`
  margin-top: 2vh;
`
