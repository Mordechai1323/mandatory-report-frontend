import styled from 'styled-components'

export const ReportsTableHeader = () => {
  return (
    <ReportsTableHeaderStyle>
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
    </ReportsTableHeaderStyle>
  )
}

const ReportsTableHeaderStyle = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  @media (max-width: ${({ theme }) => theme.mediaQueries.halfScreen}) {
    font-size: 0.8rem;
    & .id {
      width: 10%;
    }
    & .department {
      width: 10%;
    }
    & .date {
      width: 10%;
    }
    & .hour {
      width: 10%;
    }
    & .area {
      width: 10%;
    }
    & .content {
      width: 40.5%;
    }
  }
`
