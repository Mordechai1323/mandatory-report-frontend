import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { socket } from '../../socket'
import { Report } from '../../models/report'
import deleteIcon from '../../assets/icons/delete.svg'
import editIcon from '../../assets/icons/edit.svg'

interface ReportItemProps {
  report: Report
  editReportHandler: (report: Report) => void
  ref?: (element: HTMLDivElement) => void
}

export const ReportItem = React.forwardRef<HTMLDivElement, ReportItemProps>(
  ({ report, editReportHandler }, ref) => {
    const deleteReportHandler = (report: Report) => {
      socket.emit('deleteReport', report)
    }

    const isPassed15Minutes = moment().diff(moment(report.createdAt), 'minutes') > 15

    return (
      <ReportItemStyle
        $isImportant={report.isImportant}
        $reportTypeStyle={report.reportType.style}
        ref={ref}
      >
        <div className="report-type-style-start"></div>
        <div className="id">{report.id}</div>
        <div className="department">
          {report.department.name} - {report.department.phone}
        </div>
        <div className="date">{moment(report.createdAt).format('DD/MM/YY')}</div>
        <div className="hour">{moment(report.createdAt).format('HH:mm')}</div>
        <div className="area">{report.area.name}</div>
        <div className="content">
          {`${
            report.createdAt !== report.updatedAt
              ? `נערך  ${moment(report.updatedAt).format('HH:mm')} -`
              : ''
          } ${report.content}`}
        </div>
        <div className="report-type">{report.reportType.name}</div>
        <div className="delete-or-edit">
          <img
            src={editIcon}
            alt="edit"
            onClick={() => editReportHandler(report)}
            style={{ visibility: isPassed15Minutes ? 'hidden' : 'visible' }}
          />
          <img src={deleteIcon} alt="delete" onClick={() => deleteReportHandler(report)} />
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
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.375rem;
  overflow: hidden;
  margin: 0.5rem 0;

  & .report-type-style-start {
    width: 0.5%;
    height: 100%;
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
    height: 100%;
    background-color: ${({ $reportTypeStyle }) => $reportTypeStyle};
  }
`
