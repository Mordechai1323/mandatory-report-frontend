import styled from 'styled-components'

export const ReportsHeader = () => {
  return (
    <ReportsHeaderStyle>
      <div className="report-type-style-start"></div>
      <div className="id">מס’ הדיווח</div>
      <div className="department">מכלול מדווח</div>
      <div className="date">תאריך</div>
      <div className="hour">שעה</div>
      <div className="area">זירה</div>
      <div className="content">תוכן הדיווח</div>
      <div className="report-type">מהות הדיווח</div>
      <div className="delete-or-edit"></div>
      <div className="report-type-style-end"></div>
    </ReportsHeaderStyle>
  )
}

const ReportsHeaderStyle = styled.div`
  width: 100%;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 0 0.063rem 0.063rem 0.063rem solid ${({ theme }) => theme.colors.border};
  border-radius: 0 0.063rem 0.063rem 0.063rem;

  & .report-type-style-start {
    width: 0.5%;
  }
  & .id {
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
  }
  & .report-type {
    width: 10%;
  }
  & .delete-or-edit {
    width: 3%;
  }
  & .report-type-style-end {
    width: 1%;
  }
`
