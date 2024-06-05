import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { socket } from '../../socket'
import { Report } from '../../models/report'
import deleteIcon from '../../assets/icons/delete.svg'
import editIcon from '../../assets/icons/edit.svg'
import { useAuth } from '../../hooks/useAuth'

interface ReportItemProps {
  report: Report
  editReportHandler: (report: Report) => void
  ref?: (element: HTMLDivElement) => void
}

export const ReportItem = React.forwardRef<HTMLDivElement, ReportItemProps>(
  ({ report, editReportHandler }, ref) => {
    const { auth } = useAuth()
    const deleteReportHandler = (report: Report) => {
      socket.emit('deleteReport', report)
    }

    const isPassed15Minutes = moment().diff(moment(report.createdAt), 'minutes') > 15
    const isCurrentUser = report.createdBy === auth?.uniqueID

    return (
      <ReportItemStyle
        $isImportant={report.isImportant}
        $reportTypeStyle={report.reportType.style}
        ref={ref}
      >
        <div className="report-type-style-start"></div>
        <div className="center id">{report.id}</div>
        <div className="center department">
          {report.department.name} - {report.department.phone}
        </div>
        <div className="center date">{moment(report.createdAt).format('DD/MM/YY')}</div>
        <div className="center hour">{moment(report.createdAt).format('HH:mm')}</div>
        <div className="center area">{report.area.name}</div>
        <div className="center content">
          {`${
            report.createdAt !== report.updatedAt
              ? `נערך  ${moment(report.updatedAt).format('HH:mm')} -`
              : ''
          } ${report.content}`}
        </div>
        <div className="center report-type">{report.reportType.name}</div>
        <div className="center delete-or-edit">
          <img
            src={editIcon}
            alt="edit"
            onClick={() => editReportHandler(report)}
            style={{
              visibility: !isPassed15Minutes && isCurrentUser ? 'visible' : 'hidden',
            }}
          />

          <img
            src={deleteIcon}
            alt="delete"
            onClick={() => deleteReportHandler(report)}
            style={{ visibility: isCurrentUser ? 'visible' : 'hidden' }}
          />
        </div>
        <div className="report-type-style-end"></div>
      </ReportItemStyle>
    )
  }
)

type HomeStyleProps = {
  $isImportant: boolean
  $reportTypeStyle: string
}

const ReportItemStyle = styled.div<HomeStyleProps>`
  width: 100%;
  min-height: 3.75rem;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.375rem;
  overflow: hidden;
  margin: 0.5rem 0;
  overflow-wrap: anywhere;

  & .center {
    align-self: center;
  }

  & .report-type-style-start {
    width: 0.5%;
    height: auto;
    background-color: ${({ $reportTypeStyle }) => $reportTypeStyle};
  }
  & .id {
    padding-right: 1.5%;
    width: 7%;
  }
  & .department {
    width: 13%;
  }
  & .date {
    width: 6%;
  }
  & .hour {
    width: 5%;
  }
  & .area {
    width: 9%;
  }
  & .content {
    width: 45.5%;
    color: ${({ $isImportant, theme }) =>
      $isImportant ? theme.colors.important : theme.colors.text};
    padding: 0.5rem;
  }
  & .report-type {
    width: 10%;
  }
  & .delete-or-edit {
    width: 3%;

    & img {
      width: 1.1rem;
      height: 100%;
      margin: 0 0.2rem;
      cursor: pointer;
    }
  }
  & .report-type-style-end {
    width: 1%;
    height: auto;
    background-color: ${({ $reportTypeStyle }) => $reportTypeStyle};
  }
`
