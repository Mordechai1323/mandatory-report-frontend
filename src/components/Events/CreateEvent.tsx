import React from 'react'
import styled from 'styled-components'
import { SelectChangeEvent } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Input } from '../UI/Input'
import { Button } from '../UI/Button'
import { Select } from '../UI/Select'
import { EventPopupType } from './EventPopup'
import { createEvent } from '../../api/events'
import { EventForm, eventSchema } from '../../models/event'
import { EventType, eventsTypes } from '../../constants/events'
import { useMutationCustom } from '../../hooks/useMutationCustom'

interface CreateEventProps {
  closeEventPopup: () => void
  setEventPopupType: React.Dispatch<React.SetStateAction<EventPopupType>>
}

export const CreateEvent = ({ closeEventPopup, setEventPopupType }: CreateEventProps) => {
  const [isLoading, setIsLoading] = React.useState(false)
  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    control,
    formState: { errors },
  } = useForm<EventForm>({
    resolver: zodResolver(eventSchema),
  })

  const { mutate } = useMutationCustom({
    queryKey: ['events'],
    mutationFn: (data: EventForm) => createEvent(data),
    updateQueryData(updateData, queryData) {
      return queryData ? [...queryData, updateData] : [updateData]
    },
    onSuccessFunction: () => {
      setIsLoading(false)
      closeEventPopup()
    },
  })

  const handleSelectChange = async (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as EventType

    setValue('isTraining', value === 'תרגיל')
    await trigger('isTraining')
  }

  const onSubmit: SubmitHandler<EventForm> = (data) => {
    setIsLoading(true)
    mutate(data)
  }
  console.log(errors)

  return (
    <CreateEventStyle onSubmit={handleSubmit(onSubmit)}>
      <div className="title">
        <h2>יצירת אירוע</h2>
      </div>

      <div>
        <Input
          label="שם האירוע"
          input={{
            ...register('name'),
            id: 'content',
          }}
          style={{ marginTop: '2.5rem' }}
          errMessage={errors.name?.message}
        />
        <Select<EventForm>
          options={eventsTypes?.map((eventType) => ({ value: eventType, label: eventType }))}
          control={control}
          select={{
            onChange: handleSelectChange,
            MenuProps: {
              disablePortal: true,
              onClick: (e) => {
                e.preventDefault()
              },
            },
          }}
          name={'isTraining'}
          label={'סוג האירוע'}
          style={{ marginTop: '2rem' }}
          errMessage={errors.isTraining?.message}
        />
      </div>

      <BottomContainer>
        <BackButton>
          <Button button={{ type: 'button', onClick: () => setEventPopupType('chooseEvent') }}>
            <div className="back">
              <span>{'<'}</span>
              <span>חזור</span>
            </div>
          </Button>
        </BackButton>
        <SubmitButton>
          <Button button={{ type: 'submit', disabled: isLoading }}>
            {isLoading ? 'טוען...' : 'שמור'}
          </Button>
        </SubmitButton>
      </BottomContainer>
    </CreateEventStyle>
  )
}

const CreateEventStyle = styled.form`
  width: 80%;
  height: 90%;

  & .title {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 2.5rem;
  }
`

const BottomContainer = styled.div`
  margin-top: 8rem;
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: space-between;

  & .back {
    display: flex;
    align-items: center;
    font-size: 1.2rem;

    & span {
      color: ${({ theme }) => theme.colors.primary};
      margin-right: 0.5rem;
    }
  }
`
const BackButton = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  font-size: 1.6rem;
`

const SubmitButton = styled.div`
  width: 15%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
`
