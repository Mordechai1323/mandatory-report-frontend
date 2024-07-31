import React, { useState } from 'react'
import styled from 'styled-components'

import { Modal } from '../UI/Modal'
import { Button } from '../UI/Button'
import { Loading } from '../../pages/Loading'
import { Department } from '../../models/department'
import { ChooseDepartment } from './ChooseDepartment'
import { CenterContainer } from '../UI/CenterContainer'
import { useDepartments } from '../../hooks/useDepartments'

interface EditPresetsProps {
  isOpen: boolean
  handleClose: () => void
}

export const EditPresets = ({ handleClose, isOpen }: EditPresetsProps) => {
  const { departments } = useDepartments()
  const [departmentSelected, setDepartmentSelected] = useState<Department | undefined>()
  const [isLoading, setIsLoading] = React.useState(false)

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={'עריכת פריסטים'}
      style={{ width: '38rem', height: '30.5rem' }}
    >
      {!departments ? (
        <Loading />
      ) : (
        <EditPresetsStyle>
          <CenterContainer style={{ height: '90%', marginRight: '5%' }}>
            <ChooseDepartment
              departmentSelected={departmentSelected}
              setDepartmentSelected={setDepartmentSelected}
            />
            <BottomContainer>
              <BackButton>
                <Button button={{ type: 'button', onClick: handleClose }}>{`< חזור`}</Button>
              </BackButton>
              <SubmitButton>
                <Button button={{ type: 'submit', disabled: isLoading }}>
                  {isLoading ? 'טוען...' : 'הוספה'}
                </Button>
              </SubmitButton>
            </BottomContainer>
          </CenterContainer>
        </EditPresetsStyle>
      )}
    </Modal>
  )
}
const EditPresetsStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BottomContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5rem;
`
const BackButton = styled.div`
  width: 15%;

  & button {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2rem;
    font-weight: 100;
    display: flex;
    align-items: center;
  }
`
const SubmitButton = styled.div`
  width: 15%;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;

  & button {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
  }
`
