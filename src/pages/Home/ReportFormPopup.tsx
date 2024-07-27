import React from 'react'
import styled from 'styled-components'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Loading } from '../Loading'
import { socket } from '../../socket'
import { notify } from '../../utils/notify'
import { useAreas } from '../../hooks/useAreas'
import { Modal } from '../../components/UI/Modal'
import { Input } from '../../components/UI/Input'
import { Select } from '../../components/UI/Select'
import { Button } from '../../components/UI/Button'
import { useDepartments } from '../../hooks/useDepartments'
import { useReportsTypes } from '../../hooks/useReportsTypes'
import { Autocomplete } from '../../components/UI/Autocomplete'
import { CenterContainer } from '../../components/UI/CenterContainer'
import { Report, ReportForm, reportSchema } from '../../models/report'
import { getUserChoices, setUserChoices } from '../../utils/reportForm'

interface ReportFormPopupProps {
  isOpen: boolean
  handleClose: () => void
  title: string
  report?: Report
  eventId?: number
}

export const ReportFormPopup = ({
  isOpen,
  handleClose,
  title,
  report,
  eventId,
}: ReportFormPopupProps) => {
  const isEdit = !!report
  const [isLoading, setIsLoading] = React.useState(false)
  const reportFormUserChoices = getUserChoices()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ReportForm>({
    defaultValues: isEdit ? report : reportFormUserChoices,
    resolver: zodResolver(reportSchema),
  })
  const { departments } = useDepartments()
  const { areas } = useAreas()
  const { reportsTypes } = useReportsTypes()

  const onSubmitHandler: SubmitHandler<ReportForm> = (data) => {
    setIsLoading(true)

    const handleUpdateReport = (updatedReport: Report) => {
      if (updatedReport.id) {
        notify('success', 'הדיווח עודכן בהצלחה')
      } else {
        notify('error', 'הדיווח לא נשמר, נסה שוב')
      }
      setIsLoading(false)
      handleClose()
      socket.off('updateReport', handleUpdateReport)
    }

    const handleCreateReport = (newReport: Report) => {
      setIsLoading(false)
      handleClose()
      setUserChoices(newReport)

      if (newReport.id) {
        notify('success', 'הדיווח נשלח בהצלחה')
      } else {
        notify('error', 'הדיווח לא נשלח, נסה שוב')
      }
      socket.off('createReport', handleCreateReport)
    }

    if (isEdit && report) {
      socket.emit('updateReport', { ...data, id: report.id })
      socket.on('updateReport', handleUpdateReport)
    } else {
      //TODO: change to real user id
      socket.emit('createReport', { ...data, eventId, createdBy: '212555569' })
      socket.on('createReport', handleCreateReport)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={title}
      style={{ width: '38rem', minHight: '40rem' }}
    >
      {!departments || !areas || !reportsTypes ? (
        <Loading />
      ) : (
        <ReportFormPopupStyle onSubmit={handleSubmit(onSubmitHandler)}>
          <CenterContainer style={{ height: '90%', marginRight: '5%' }}>
            <Autocomplete<ReportForm>
              label="תוכן הדיווח"
              control={control}
              name="content"
              placeholder={'*תוכן הדיווח מוגבל עד 250 תווים'}
              options={['aaaaaa', 'bbbbbbb', 'cccccc']}
              errMessage={errors.content?.message}
            />
            <Select<ReportForm>
              options={reportsTypes?.map((reportType) => ({
                value: reportType.id,
                label: reportType.name,
              }))}
              control={control}
              name={'reportTypeId'}
              label={'מהות הדיווח'}
              style={{ marginTop: '2rem' }}
              errMessage={errors.reportTypeId?.message}
            />

            <Select<ReportForm>
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

            <Select<ReportForm>
              options={areas?.map((area) => ({ value: area.id, label: area.name }))}
              control={control}
              name={'areaId'}
              label={'זירה'}
              style={{ marginTop: '2rem' }}
              errMessage={errors.areaId?.message}
            />
            <Input
              label="סמן האם ההודעה חשובה"
              input={{
                id: 'isImportant',
                type: 'checkbox',
                ...register('isImportant'),
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
        </ReportFormPopupStyle>
      )}
    </Modal>
  )
}

const ReportFormPopupStyle = styled.form`
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
