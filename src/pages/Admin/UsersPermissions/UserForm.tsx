import React from 'react'
import styled from 'styled-components'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import { User } from './UsersTableBody'
import { userSchema } from '../../../models/user'
import { Modal } from '../../../components/UI/Modal'
import { Input } from '../../../components/UI/Input'
import { Button } from '../../../components/UI/Button'
import { CenterContainer } from '../../../components/UI/CenterContainer'

interface UserFormProps {
  isOpen: boolean
  handleClose: () => void
  title: string
  user?: User
}

export const UserForm = ({ isOpen, handleClose, title, user }: UserFormProps) => {
  const isEdit = !!user
  const [isLoading, setIsLoading] = React.useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<User>({
    defaultValues: isEdit ? user : { role: 1 },
    resolver: zodResolver(userSchema),
  })

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue('role', Number(!event.target.checked))
  }

  const onSubmitHandler: SubmitHandler<User> = (data) => {
    console.log(data)

    setIsLoading(true)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={title}
      style={{ width: '38rem', minHight: '40rem' }}
    >
      <UserFormStyle onSubmit={handleSubmit(onSubmitHandler)}>
        <CenterContainer style={{ height: '90%', marginRight: '5%' }}>
          <Input
            label="שם מלא"
            input={{
              ...register('name'),
              id: 'name',
              name: 'name',
            }}
            style={{ marginTop: '2rem' }}
            errMessage={errors.name?.message}
          />
          <Input
            label="Username"
            input={{
              ...register('userName'),
              id: 'userName',
              name: 'userName',
            }}
            style={{ marginTop: '2rem' }}
            errMessage={errors.userName?.message}
          />
          <Input
            label="סיווג"
            input={{
              type: 'number',
              ...register('classification', { valueAsNumber: true }),
              id: 'classification',
              name: 'classification',
            }}
            style={{ marginTop: '2rem' }}
            errMessage={errors.classification?.message}
          />
          <Input
            label="email"
            input={{
              ...register('email'),
              id: 'email',
              name: 'email',
            }}
            style={{ marginTop: '2rem' }}
            errMessage={errors.email?.message}
          />
          <Input
            label="היררכיה"
            input={{
              ...register('displayName'),
              id: 'displayName',
              name: 'displayName',
            }}
            style={{ marginTop: '2rem' }}
            errMessage={errors.displayName?.message}
          />

          <Input
            label="הרשאות ניהול"
            input={{
              id: 'role',
              type: 'checkbox',
              onChange: handleCheckboxChange,
            }}
            style={{
              marginTop: '2.5rem',
              border: 'black',
              display: 'flex',
              padding: '0',
              paddingLabel: '0 0.5rem 0 0',
              marginTopInputContainer: '0',
              justifyContent: 'end',
              direction: 'ltr',
            }}
            errMessage={errors.role?.message}
          />

          <BottomContainer>
            <BackButton>
              <Button button={{ type: 'button', onClick: handleClose }}>{`< חזור`}</Button>
            </BackButton>
            <SubmitButton>
              <Button button={{ type: 'submit', disabled: isLoading }}>
                {isLoading ? 'טוען...' : 'שמור'}
              </Button>
            </SubmitButton>
          </BottomContainer>
        </CenterContainer>
      </UserFormStyle>
    </Modal>
  )
}

const UserFormStyle = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  & .report-limit {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 0.8rem;
    margin-top: 1rem;
  }
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
