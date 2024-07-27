import styled from 'styled-components'

import { CenterContainer } from '../../components/UI/CenterContainer'

export const ReportsTypes = () => {
  return (
    <ReportsTypesStyle>
      <CenterContainer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="top">מהות הדיווחים</div>
      </CenterContainer>
    </ReportsTypesStyle>
  )
}

const ReportsTypesStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 40%;
  height: 100%;

  & .top {
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1rem;
  }
`
