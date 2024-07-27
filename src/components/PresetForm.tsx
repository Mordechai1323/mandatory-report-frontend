import React from 'react'
import styled from 'styled-components'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Input } from './UI/Input'
import { Modal } from './UI/Modal'
import { Button } from './UI/Button'
import { Select } from './UI/Select'
import { Loading } from '../pages/Loading'
import { getUserChoices } from '../utils/reportForm'
import { CenterContainer } from './UI/CenterContainer'
import { useDepartments } from '../hooks/useDepartments'
import { Preset, presetSchema } from '../models/presets'
import { handlerError } from '../utils/handlerError'
import { axiosPrivate } from '../api/axios'
import { notify } from '../utils/notify'

interface PresetFormProps {
  isOpen: boolean
  handleClose: () => void
  title: string
  preset?: Preset
}

export const PresetForm = ({ isOpen, handleClose, title, preset }: PresetFormProps) => {
  const isEdit = !!preset
  const [isLoading, setIsLoading] = React.useState(false)
  const reportFormUserChoices = getUserChoices()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Preset>({
    defaultValues: isEdit ? preset : { departmentId: reportFormUserChoices?.departmentId },
    resolver: zodResolver(presetSchema),
  })
  const { departments } = useDepartments()

  const onSubmitHandler: SubmitHandler<Preset> = async (data) => {
    setIsLoading(true)
    try {
      const response = await axiosPrivate.post('/presets', data)
      console.log(response)
      notify('success', 'הפריסט נשמר בהצלחה')
    } catch (error) {
      handlerError(error)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={title}
      style={{ width: '38rem', minHight: '34.5rem' }}
    >
      {!departments ? (
        <Loading />
      ) : (
        <PresetFormStyle onSubmit={handleSubmit(onSubmitHandler)}>
          <CenterContainer style={{ height: '90%', marginRight: '5%' }}>
            <Select
              options={departments?.map((department) => ({
                value: department.id,
                label: department.name,
              }))}
              control={control}
              name={'departmentId'}
              label={'מכלול מדווח'}
              style={{ marginTop: '2rem' }}
              errMessage={errors.departmentId?.message}
            />

            <Input
              label="תוכן הדיווח"
              isTextArea
              textArea={{
                ...register('content'),
                id: 'content',
                name: 'content',
                rows: 5,
                placeholder: 'לדוגמה דיווח על תקלה במערכת',
              }}
              style={{ marginTop: '2rem' }}
              errMessage={errors.content?.message}
            />
            <span className="report-limit">*תוכן הדיווח מוגבל עד 250 תווים</span>

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
        </PresetFormStyle>
      )}
    </Modal>
  )
}

const PresetFormStyle = styled.form`
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
