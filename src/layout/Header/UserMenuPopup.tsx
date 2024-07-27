import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth'
import { SelectOption } from '../../pages/Home/NavigationAndFilters/Filters/SelectOption'

interface UserMenuPopupProps {
  closeMenu: () => void
  openAddPreset: () => void
}

export const UserMenuPopup = ({ closeMenu, openAddPreset }: UserMenuPopupProps) => {
  const { auth } = useAuth()
  const navigate = useNavigate()

  const onClickNavigate = (path: string) => {
    closeMenu()
    navigate(path)
  }

  const menuOptions = React.useMemo(
    () => [
      {
        label: 'הוספת פריסט',
        value: 'הוספת פריסט',
        onClickHandler: () => {
          openAddPreset()
          closeMenu()
        },
        roleAllowed: 1,
      },
      {
        label: 'ניהול הרשאות',
        value: 'ניהול הרשאות',
        onClickHandler: () => onClickNavigate('/admin/users-permissions'),
        roleAllowed: 0,
      },
      {
        label: 'ניהול רשימות',
        value: 'ניהול רשימות',
        onClickHandler: () => onClickNavigate('/admin/manage-lists'),
        roleAllowed: 0,
      },
    ],
    []
  )

  return (
    <UserMenuPopupStyle>
      {menuOptions.map(
        (option) =>
          auth &&
          auth.role <= option.roleAllowed && (
            <SelectOption
              key={option.label}
              option={option}
              onClickHandler={option.onClickHandler}
            />
          )
      )}
    </UserMenuPopupStyle>
  )
}

const UserMenuPopupStyle = styled.div`
  position: absolute;
  top: 3rem;
  width: 10vw;
  min-width: 12rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 1vh 0.5vw;
  z-index: 1;
`
