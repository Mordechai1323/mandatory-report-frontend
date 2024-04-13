import React from 'react'
import styled from 'styled-components'

import { ReportItem } from './ReportItem'
import { Report } from '../../models/report'
import { ReportsHeader } from './ReportsHeader'
import { ReportFormPopup } from '../../pages/Home/ReportFormPopup'
import { useReports } from '../../hooks/useReports'

export const ReportsTable = () => {
  const [reportToEdit, setReportToEdit] = React.useState<Report>()
  const [isEditReportPopupOpen, setIsEditReportPopupOpen] = React.useState(false)

  const { reports } = useReports()

  const editReportHandler = (report: Report) => {
    setReportToEdit(report)
    setIsEditReportPopupOpen(true)
  }

  const handelCloseEditReportPopup = () => {
    setIsEditReportPopupOpen(false)
    setReportToEdit(undefined)
  }

  return (
    <ReportsTableStyle>
      <ReportsHeader />
      {reports?.map((report) => {
        return <ReportItem report={report} key={report.id} editReportHandler={editReportHandler} />
      })}
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
