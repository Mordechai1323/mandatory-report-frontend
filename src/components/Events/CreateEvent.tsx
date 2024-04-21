import React from 'react'
import styled from 'styled-components'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { EventPopupType } from './EventPopup'
import { Input } from '../UI/Input'
import { EventType, eventsTypes } from '../../constants/events'
import { Select } from '../UI/Select'
import { EventForm, eventSchema } from '../../models/event'
import { Button } from '../UI/Button'
import { createEvent } from '../../api/events'

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
    formState: { errors },
  } = useForm<EventForm>({
    resolver: zodResolver(eventSchema),
  })
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (data: EventForm) => createEvent(data),
    onSuccess: () => {
      setIsLoading(false)
      closeEventPopup()
      queryClient.invalidateQueries({ queryKey: ['events'] })
    },
  })

  const handleSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as EventType

    setValue('isTraining', value === 'תרגיל')
    await trigger('isTraining')
  }

  const onSubmit: SubmitHandler<EventForm> = (data) => {
    setIsLoading(true)
    mutate(data)
  }

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
        <Select
          props={{
            label: 'סוג האירוע',
            select: {
              id: 'isTraining',
              name: 'isTraining',
              onChange: handleSelectChange,
              placeholder: 'בחר סוג אירוע',
            },
            style: { marginTop: '2.5rem' },
            errMessage: errors.isTraining?.message,
          }}
        >
          {eventsTypes.map((eventType) => (
            <option value={eventType} key={eventType}>
              {eventType}
            </option>
          ))}
        </Select>
      </div>

      <BottomContainer>
        <BackButton>
          <Button button={{ type: 'button', onClick: () => setEventPopupType('chooseEvent') }}>
            חזור
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
  display: flex;
  justify-content: space-between;
  height: 2.5rem;
`
const BackButton = styled.div`
  width: 15%;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid black;
  border-radius: 6px;
`

const SubmitButton = styled.div`
  width: 15%;
  background: black;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid black;
  border-radius: 6px;
`
