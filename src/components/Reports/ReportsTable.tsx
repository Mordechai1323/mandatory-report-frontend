import React from 'react'
import styled from 'styled-components'

import { Report } from '../../models/report'
import { ReportsTableHeader } from './ReportsTableHeader'
import { ReportFormPopup } from '../../pages/Home/ReportFormPopup'
import { ReportsTableBody } from './ReportsTableBody'

export const ReportsTable = () => {
  const [reportToEdit, setReportToEdit] = React.useState<Report>()

  return (
    <ReportsTableStyle>
      <ReportsCenterTableStyle>
        <ReportsTableHeader />
        <ReportsTableBody editReportHandler={(report: Report) => setReportToEdit(report)} />
        <ReportFormPopup
          key={reportToEdit?.id}
          isOpen={!!reportToEdit}
          handleClose={() => setReportToEdit(undefined)}
          title="עריכת דיווח"
          report={reportToEdit}
        />
      </ReportsCenterTableStyle>
    </ReportsTableStyle>
  )
}

const ReportsTableStyle = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white + '66'};
`

const ReportsCenterTableStyle = styled.div`
  width: 92%;
  height: 90%;
`
