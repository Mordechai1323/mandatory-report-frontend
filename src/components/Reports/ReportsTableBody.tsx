import React from 'react'
import styled from 'styled-components'
import { useIntersection } from '@mantine/hooks'

import { ReportItem } from './ReportItem'
import { Report } from '../../models/report'
import { Loading } from '../../pages/Loading'
import { useReports } from '../../hooks/useReports'
import { ReportDeleted } from './ReportDeleted'

interface ReportsTableBodyProps {
  editReportHandler: (report: Report) => void
}

export const ReportsTableBody = ({ editReportHandler }: ReportsTableBodyProps) => {
  const {
    reports,
    getNextPage,
    isLoading,
    isLoadingNexPage,
    reportDeleted,
    closeDeleteReportPopup,
  } = useReports()

  const lastReportRef = React.useRef<HTMLDivElement>()
  const { ref, entry } = useIntersection({
    root: lastReportRef.current,
    threshold: 1,
  })

  React.useEffect(() => {
    if (entry?.isIntersecting) getNextPage()
  }, [entry])

  if (isLoading) return <Loading />

  return (
    <ReportsTableBodyStyle>
      {reports?.map((report, i) => {
        return (
          <ReportItem
            report={report}
            key={report.id}
            editReportHandler={editReportHandler}
            ref={i === reports.length - 1 ? ref : undefined}
          />
        )
      })}
      {isLoadingNexPage && <Loading />}
      {reportDeleted && (
        <ReportDeleted
          isOpen={!!reportDeleted}
          report={reportDeleted}
          onClose={closeDeleteReportPopup}
        />
      )}
    </ReportsTableBodyStyle>
  )
}

const ReportsTableBodyStyle = styled.div`
  height: 90%;
  padding-left: 0.3%;
  overflow: auto;
`
