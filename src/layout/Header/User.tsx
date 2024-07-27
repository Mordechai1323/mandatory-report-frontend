import React from 'react'
import styled from 'styled-components'

import { useAuth } from '../../hooks/useAuth'
import { UserMenuPopup } from './UserMenuPopup'
import UserIcon from '../../assets/icons/user.svg'
import { useClickOutSide } from '../../hooks/useClickOutSide'
import { PresetForm } from '../../components/PresetForm'

export const User = () => {
  const { auth } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isAddPresetOpen, setIsAddPresetOpen] = React.useState(false)
  const { ref } = useClickOutSide<HTMLDivElement>(() => setIsMenuOpen(false))

  return (
    <UserStyle ref={ref}>
      <UserDetails onClick={() => setIsMenuOpen((prev) => !prev)}>
        <span>{auth?.name}</span>
        <img src={UserIcon} alt="user icon" />
      </UserDetails>
      {isMenuOpen && (
        <UserMenuPopup
          closeMenu={() => setIsMenuOpen(false)}
          openAddPreset={() => setIsAddPresetOpen(true)}
        />
      )}
      {isAddPresetOpen && (
        <PresetForm
          isOpen={isAddPresetOpen}
          handleClose={() => setIsAddPresetOpen(false)}
          title="הוספת פריסט"
        />
      )}
    </UserStyle>
  )
}

const UserStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2%;
  max-width: 23%;
  height: 100%;
  position: relative;
  cursor: pointer;
`

const UserDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & img {
    margin-right: 0.5rem;
  }
`
