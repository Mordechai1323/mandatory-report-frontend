import React from 'react'
import styled from 'styled-components'

import openFilter from '../../assets/icons/openFilter.svg'
import { useClickOutSide } from '../../hooks/useClickOutSide'
import { ChooseDepartmentPopup } from './ChooseDepartmentPopup'
import { Department } from '../../models/department'

interface ChooseDepartmentProps {
  setDepartmentSelected: React.Dispatch<React.SetStateAction<Department | undefined>>
  departmentSelected: Department | undefined
}

export const ChooseDepartment = ({
  departmentSelected,
  setDepartmentSelected,
}: ChooseDepartmentProps) => {
  const [isChooseDepartmentPopupOpen, setIsChooseDepartmentPopupOpen] = React.useState(false)

  const { ref } = useClickOutSide<HTMLDivElement>(() => setIsChooseDepartmentPopupOpen(false))

  return (
    <ChooseDepartmentStyle ref={ref}>
      <FilterDetails onClick={() => setIsChooseDepartmentPopupOpen((prev) => !prev)}>
        <span>{departmentSelected ? departmentSelected.name : 'מכלול מדווח'}</span>
        <img src={openFilter} alt="open filter icon" />
      </FilterDetails>
      {isChooseDepartmentPopupOpen && (
        <ChooseDepartmentPopup
          departmentSelected={departmentSelected}
          setDepartmentSelected={setDepartmentSelected}
          closePopup={() => setIsChooseDepartmentPopupOpen(false)}
        />
      )}
    </ChooseDepartmentStyle>
  )
}

const ChooseDepartmentStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 23%;
`

const FilterDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  height: 100%;
  width: 100%;

  & img {
    margin-right: 1rem;
  }

  & span {
    color: ${({ theme }) => theme.colors.gray};
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
