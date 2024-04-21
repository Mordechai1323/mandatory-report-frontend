import React from 'react'
import styled from 'styled-components'
import { useIntersection } from '@mantine/hooks'

import { ReportItem } from './ReportItem'
import { Report } from '../../models/report'
import { Loading } from '../../pages/Loading'
import { ReportsHeader } from './ReportsHeader'
import { useReports } from '../../hooks/useReports'
import { ReportFormPopup } from '../../pages/Home/ReportFormPopup'

export const ReportsTable = () => {
  const [reportToEdit, setReportToEdit] = React.useState<Report>()
  const [isEditReportPopupOpen, setIsEditReportPopupOpen] = React.useState(false)

  const { reports, getNextPage, isLoading, isLoadingNexPage } = useReports()

  const lastReportRef = React.useRef<HTMLDivElement>()
  const { ref, entry } = useIntersection({
    root: lastReportRef.current,
    threshold: 1,
  })

  const editReportHandler = (report: Report) => {
    setReportToEdit(report)
    setIsEditReportPopupOpen(true)
  }

  const handelCloseEditReportPopup = () => {
    setIsEditReportPopupOpen(false)
    setReportToEdit(undefined)
  }

  React.useEffect(() => {
    if (entry?.isIntersecting) getNextPage()
  }, [entry, getNextPage])

  if (isLoading) return <Loading />

  return (
    <ReportsTableStyle>
      <ReportsHeader />
      {reports?.map((report, i) => {
        return (
          <ReportItem
            report={report}
            key={report.id}
            editReportHandler={editReportHandler}
            ref={i === reports.length -1 ? ref : undefined}
          />
        )
      })}
      {isLoadingNexPage && <Loading />}
      {reportToEdit && (
        <ReportFormPopup
          isOpen={isEditReportPopupOpen}
          handleClose={handelCloseEditReportPopup}
          title="עריכת דיווח"
          report={reportToEdit}
        />
      )}
    </ReportsTableStyle>
  )
}

const ReportsTableStyle = styled.div`
  width: 92%;
  padding-left: 0.5%;
  height: 90%;
  overflow: auto;
  margin-top: 2rem;
`
