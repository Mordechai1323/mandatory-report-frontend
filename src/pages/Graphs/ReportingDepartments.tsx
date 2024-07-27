import styled from 'styled-components'

import { CenterContainer } from '../../components/UI/CenterContainer'

export const ReportingDepartments = () => {
  return (
    <ReportingDepartmentsStyle>
      <CenterContainer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="top">
          <h4>מכלולים מדווחים</h4>
          <span>5 המכלולים הגבוהים ביותר</span>
        </div>
      </CenterContainer>
    </ReportingDepartmentsStyle>
  )
}

const ReportingDepartmentsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 40%;
  height: 100%;

  & .top {
    width: 100%;
    margin-top: 1rem;

    & h4 {
      font-size: 1rem;
      font-weight: 600;
    }
    & span {
      font-size: 0.8rem;
    }
  }
`
